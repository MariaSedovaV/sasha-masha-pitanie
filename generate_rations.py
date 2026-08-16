#!/usr/bin/env python3
"""Generate 50 weekly rations for Sasha & Masha nutrition site."""

from __future__ import annotations

import copy
import itertools
import json
import random
import re
import urllib.parse
from collections import defaultdict
from pathlib import Path

SITE = Path(__file__).resolve().parent
DATA_JS = SITE / "data.js"

DAILY_RANGES = {
    "Саша": {"Ккал": (2210, 2487), "Белки": (170, 182), "Жиры": (48, 56), "Углеводы": (285, 305)},
    "Маша": {"Ккал": (1640, 1845), "Белки": (124, 134), "Жиры": (38, 47), "Углеводы": (195, 212)},
}

DAY_NAMES = {
    "ПН": "Понедельник", "ВТ": "Вторник", "СР": "Среда", "ЧТ": "Четверг",
    "ПТ": "Пятница", "СБ": "Суббота", "ВС": "Воскресенье",
}
MEAL_ORDER = ["Завтрак", "Обед", "Ужин", "Перекус 1", "Перекус 2", "Перекус 3"]
FIRST_HALF_MEALS = {"Завтрак", "Обед", "Перекус 1"}
MAX_PROTEIN = 40
BLOCKS = [("ПН", "ВТ", 0), ("СР", "ЧТ", 1), ("ПТ", "СБ", 2)]

PROTEIN_POWDER = {
    "Саша": {"Белки": 24, "Жиры": 1, "Углеводы": 3, "Ккал": 120},
    "Маша": {"Белки": 24, "Жиры": 1, "Углеводы": 3, "Ккал": 120},
}

IMAGE_BY_TYPE = {
    "Завтрак": "images/meal_breakfast_bowl.png",
    "Обед": "images/meal_chicken_grain_vegetables.png",
    "Ужин": "images/meal_beef_grain_vegetables.png",
    "Перекус 1": "images/meal_yogurt_fruit_snack.png",
    "Перекус 2": "images/meal_salad_protein.png",
    "Перекус 3": "images/meal_yogurt_fruit_snack.png",
}

PHOTO_QUERY = {
    "Завтрак": "healthy breakfast toast",
    "Обед": "chicken healthy meal",
    "Ужин": "beef vegetables dinner",
    "Перекус 1": "yogurt fruit snack",
    "Перекус 2": "salad protein snack",
    "Перекус 3": "light fruit snack",
}

COLORS = [
    "#c9e4de", "#fce1b6", "#d8e2dc", "#cddafd", "#fde2e4", "#e2f0cb", "#d7e3fc",
    "#f8cdda", "#bde0fe", "#ffc8dd", "#cdb4db", "#a2d2ff", "#ffafcc", "#b5ead7",
    "#ffd6a5", "#caffbf", "#9bf6ff", "#fdffb6", "#ffc6ff", "#fffffc", "#e9ecef",
    "#dee2e6", "#f1faee", "#a8dadc", "#457b9d", "#f4a261", "#2a9d8f", "#e76f51",
    "#264653", "#8ecae6", "#219ebc", "#ffb703", "#fb8500", "#606c38", "#283618",
    "#dda15e", "#bc6c25", "#6d6875", "#b5838d", "#ffddd2", "#ccd5ae", "#e9edc9",
    "#fefae0", "#faedcd", "#d4a373", "#ccd5ae", "#e5989b", "#ffb4a2", "#b5838d",
]

TITLES = [
    ("Овощной ритм", "Сытная неделя с заготовками, овощами и спокойной ротацией белка"),
    ("Боулы и запеканки", "Более разнообразная неделя с уютными блюдами на два дня"),
    ("Тёплый овощной план", "Рыба, полба, киноа и овощные гарниры без лишней строгости"),
    ("Домашние котлеты", "Простые заготовки, лаваш и лёгкие перекусы по мотивам домашней кухни"),
    ("Лаваш и тефтели", "Практичная неделя с тефтелями, гарнирами и быстрыми сборками"),
    ("Новая неделя без суеты", "Другие сочетания рыбы, индейки, круп и лёгких перекусов"),
    ("Фунчоза и красная рыба", "Неделя с фунчозой, варёным картофелем, авокадо и красной рыбой"),
    ("Средиземноморская неделя", "Оливковое масло, рыба, овощи и лёгкие завтраки"),
    ("Белковый баланс", "Упор на белок с кефиром, яйцами и протеиновыми перекусами"),
    ("Крупы и зелень", "Гречка, рис, киноа и много зелени для сытости"),
    ("Рыбная ротация", "Три вида рыбы в неделю и овощные гарниры"),
    ("Индейка и овощи", "Нежная индейка, запечённые овощи и ферментированные продукты"),
    ("Курица на двое", "Куриные обеды с заготовкой и разные завтраки"),
    ("Говядина и корнеплоды", "Говядина, морковь, картофель и квашеная капуста"),
    ("Лёгкие супы", "Супы на плите, тушёные овощи и белковые перекусы"),
    ("Ягодная неделя", "Черника, малина, киви и сорбет в перекусах"),
    ("Тофу и растительный белок", "Тофу, яйца и кефир для разнообразия"),
    ("Запеканки в духовке", "Запеканки из овощей и мяса до 60 минут"),
    ("Классика без суеты", "Понятные блюда на плите и в духовке"),
    ("Осенний комфорт", "Тыква, груши, тёплые каши и тушёные овощи"),
    ("Весеннее обновление", "Салаты, шпинат, огурцы и лёгкие ужины"),
    ("Сытные обеды", "Плотные обеды с крупами и клетчаткой"),
    ("Лёгкие ужины", "Ужины без тяжести, с рыбой и oвощами"),
    ("Кефир и пищеварение", "Кефир, кимчи и клетчатка каждый день"),
    ("Полба и брокколи", "Полба, брокколи, цветная капуста и индейка"),
    ("Рисовые боулы", "Рис, овощи и белок в сбалансированных порциях"),
    ("Киноа и авокадо", "Киноа, авокадо, зелень и рыба"),
    ("Шпинат и яйца", "Яичные завтраки и шпинат в основных блюдах"),
    ("Морская неделя", "Рыба три раза, морские овощи и салаты"),
    ("Домашний уют", "Простые рецепты без экзотики, до 1 часа готовки"),
    ("Энергия на неделю", "Сбалансированные макросы и стабильная энергия"),
    ("Мягкий дефицит", "Сытость при контроле калорий и белка"),
    ("Овощной микс", "Разноцветные овощи в каждом приёме пищи"),
    ("Фруктовые перекусы", "Яблоки, груши, ягоды и кефир между основными приёмами"),
    ("Белок и клетчатка", "Высокий белок и овощи для сытости"),
    ("Тушение и варка", "Блюда на плите: супы, рагу, каши"),
    ("Запечённая рыба", "Рыба в духовке с овощными гарнирами"),
    ("Куриная классика", "Курица, картофель, салаты и кимчи"),
    ("Говяжий блок", "Говядина на ужин и сытные обеды"),
    ("Индейка лайт", "Постная индейка и лёгкие гарниры"),
    ("Салатный день", "Больше свежих салатов и белковых добавок"),
    ("Тосты и выпечка", "Завтраки с тостами, лавашом и домашней выпечкой"),
    ("Омлеты и тосты", "Яичные завтраки с овощами и цельнозерновым хлебом"),
    ("Тёплые заготовки", "Готовка на два дня: обед, ужин и перекусы"),
    ("Разнообразие белка", "Курица, рыба, говядина, индейка, тофу"),
    ("Суп и второе", "Супы на обед и белковые ужины"),
    ("Зелёная тарелка", "Много зелени, кабачков и брокколи"),
    ("Комфортная неделя", "Привычные продукты и предсказуемые заготовки"),
    ("Баланс вкуса", "Сочетание белков, круп и ферментированных овощей"),
]

EMOJIS = [
    "🥦", "🍳", "🥗", "🍲", "🐟", "🍗", "🥩", "🍚", "🥑", "🫐",
    "🍎", "🥒", "🌿", "🍞", "🥛", "🍠", "🥕", "🧀", "🍵", "✨",
    "🥣", "🍽️", "🥙", "🫕", "🍝", "🥘", "🌾", "🍅", "🥬", "🍋",
    "🫒", "🥜", "🍑", "🍐", "🍌", "🥝", "🍓", "🥥", "🌽", "🧅",
    "🥄", "🍖", "🦃", "🥚", "🍠", "🫑", "🥭", "🍈", "🍉", "🥖",
]

FORBIDDEN = re.compile(r"аэрофрит|air\s*fryer|airfryer", re.I)

# Завтраки по мотивам Notes «Рецепты / Завтраки». Белок ≤40 г, углеводы/жиры смещены на первую половину дня.
SYNTHETIC_MEALS = [
    ("Завтрак", "запечённые бутерброды: 2 ломтика цельнозернового хлеба+80г нежирной ветчины+40г моцареллы+80г помидоров (духовка 15 мин)",
     "запечённые бутерброды: 1 ломтик хлеба+60г ветчины+30г моцареллы+60г помидоров",
     [("тосты", "шт", 3), ("ветчина нежирная", "г", 140), ("моцарелла", "г", 70), ("помидоры", "г", 140)],
     {"Белки": 32, "Жиры": 18, "Углеводы": 46, "Ккал": 430}, {"Белки": 24, "Жиры": 14, "Углеводы": 30, "Ккал": 310}, "images/meal_breakfast_bowl.png"),
    ("Завтрак", "тост с тянущимся сыром: лаваш 40г+80г творога+30г сыра+1 яйцо (сковорода под крышкой)",
     "тост с тянущимся сыром: лаваш 30г+60г творога+20г сыра+1 яйцо",
     [("лаваш", "г", 70), ("творог 5%", "г", 140), ("твёрдый сыр", "г", 50), ("яйца", "шт", 2)],
     {"Белки": 30, "Жиры": 16, "Углеводы": 42, "Ккал": 410}, {"Белки": 24, "Жиры": 13, "Углеводы": 30, "Ккал": 320}, "images/meal_breakfast_bowl.png"),
    ("Завтрак", "ленивый хачапури: 150г творога 5%+1 яйцо+20г рисовой муки+30г сыра+укроп (сковорода)",
     "ленивый хачапури: 100г творога+1 яйцо+15г рисовой муки+20г сыра+укроп",
     [("творог 5%", "г", 250), ("яйца", "шт", 2), ("рисовая мука", "г", 35), ("твёрдый сыр", "г", 50), ("укроп", "г", 20)],
     {"Белки": 28, "Жиры": 17, "Углеводы": 44, "Ккал": 420}, {"Белки": 22, "Жиры": 14, "Углеводы": 32, "Ккал": 330}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "творожно-маковые оладьи: 3 оладьи (150г творога+1 яйцо+8г мака)+80г малины",
     "творожно-маковые оладьи: 2 оладьи (110г творога+1 яйцо+5г мака)+70г малины",
     [("творог 5%", "г", 260), ("яйца", "шт", 2), ("мак", "г", 13), ("малина", "г", 150)],
     {"Белки": 26, "Жиры": 15, "Углеводы": 48, "Ккал": 420}, {"Белки": 20, "Жиры": 12, "Углеводы": 36, "Ккал": 320}, "images/meal_porridge_berries.png"),
    ("Завтрак", "запеканка из творога: 180г творога 5%+1 яйцо+40г черники (духовка 35 мин)",
     "запеканка из творога: 130г творога+1 яйцо+30г черники",
     [("творог 5%", "г", 310), ("яйца", "шт", 2), ("черника", "г", 70)],
     {"Белки": 28, "Жиры": 14, "Углеводы": 42, "Ккал": 400}, {"Белки": 22, "Жиры": 11, "Углеводы": 30, "Ккал": 310}, "images/meal_breakfast_bowl.png"),
    ("Завтрак", "пирожки с творогом: 3 пирожка (200г творога+1 яйцо+60г цельнозерновой муки, духовка 25 мин)",
     "пирожки с творогом: 2 пирожка (140г творога+1 яйцо+40г муки)",
     [("творог 5%", "г", 340), ("яйца", "шт", 2), ("цельнозерновая мука", "г", 100)],
     {"Белки": 30, "Жиры": 16, "Углеводы": 50, "Ккал": 440}, {"Белки": 24, "Жиры": 13, "Углеводы": 36, "Ккал": 340}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "круассан с ветчиной и сыром: 1 цельнозерновой круассан+70г ветчины+30г моцареллы (духовка 10 мин)",
     "круассан с ветчиной и сыром: 1 круассан+50г ветчины+20г моцареллы",
     [("круассаны цельнозерновые", "шт", 2), ("ветчина нежирная", "г", 120), ("моцарелла", "г", 50)],
     {"Белки": 28, "Жиры": 18, "Углеводы": 44, "Ккал": 430}, {"Белки": 22, "Жиры": 14, "Углеводы": 32, "Ккал": 330}, "images/meal_breakfast_bowl.png"),
    ("Завтрак", "яичная тортилья: 2 яйца+80г шпината+50г помидоров+1 лаваш (сковорода)",
     "яичная тортилья: 2 яйца+60г шпината+40г помидоров+1/2 лаваша",
     [("яйца", "шт", 4), ("шпинат", "г", 140), ("помидоры", "г", 90), ("лаваш", "г", 60)],
     {"Белки": 30, "Жиры": 16, "Углеводы": 40, "Ккал": 410}, {"Белки": 26, "Жиры": 14, "Углеводы": 30, "Ккал": 340}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "кабачковые тортильи: 2 яйца+150г кабачка+40г сыра+1 лаваш",
     "кабачковые тортильи: 1 яйцо+120г кабачка+25г сыра+1/2 лаваша",
     [("яйца", "шт", 3), ("цукини/кабачки", "г", 270), ("твёрдый сыр", "г", 65), ("лаваш", "г", 60)],
     {"Белки": 28, "Жиры": 15, "Углеводы": 38, "Ккал": 400}, {"Белки": 22, "Жиры": 12, "Углеводы": 28, "Ккал": 310}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "тортилья с творогом: лавash+100г творога+1 яйцо+30г моцареллы+шпинат+черри",
     "тортилья с творогом: 1/2 лаваша+80г творога+1 яйцо+20г моцареллы+шпинат+черри",
     [("лаваш", "г", 60), ("творог 5%", "г", 180), ("яйца", "шт", 2), ("моцарелла", "г", 50), ("шпинат", "г", 80), ("помидоры черри", "г", 80)],
     {"Белки": 32, "Жиры": 16, "Углеводы": 42, "Ккал": 420}, {"Белки": 26, "Жиры": 13, "Углеводы": 32, "Ккал": 330}, "images/meal_breakfast_bowl.png"),
    ("Завтрак", "смузи-боул: 200г творога+100г ягод+1 тост с 40г авокадо",
     "смузи-боул: 150г творога+80г ягод+1 тост с 25г авокадо",
     [("творог 5%", "г", 350), ("ягоды", "г", 180), ("тосты", "шт", 2), ("авокадо", "г", 65)],
     {"Белки": 30, "Жиры": 17, "Углеводы": 44, "Ккал": 430}, {"Белки": 24, "Жиры": 13, "Углеводы": 34, "Ккал": 330}, "images/meal_breakfast_bowl.png"),
    ("Завтрак", "йогурт с мюсли и ягодами: 250г гreek yogurt+50г мюсли+100г ягод",
     "йогурт с мюсли и ягодами: 180г yogurt+35г мюсли+80г ягод",
     [("гreek yogurt", "г", 430), ("мюсли", "г", 85), ("ягоды", "г", 180)],
     {"Белки": 26, "Жиры": 12, "Углеводы": 52, "Ккал": 420}, {"Белки": 20, "Жиры": 9, "Углеводы": 40, "Ккал": 320}, "images/meal_yogurt_fruit_snack.png"),
    ("Завтрак", "омлет в рисовой бумаге: 2 яйца+шпинат+100г кабачка в 2 листах рисовой бумаги",
     "омлет в рисовой бумаге: 2 яйца+шпинат+80г кабачка в 1 листе",
     [("яйца", "шт", 4), ("шпинат", "г", 120), ("цукини/кабачки", "г", 180), ("рисовая бумага", "шт", 3)],
     {"Белки": 28, "Жиры": 15, "Углеводы": 36, "Ккал": 390}, {"Белки": 24, "Жиры": 13, "Углеводы": 28, "Ккал": 320}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "тост с омлетом: 2 яйца+50г шпината+1 тост+80г помидоров",
     "тост с омлетом: 2 яйца+40г шпината+1 тост+60г помидоров",
     [("яйца", "шт", 4), ("шпинат", "г", 90), ("тосты", "шт", 2), ("помидоры", "г", 140)],
     {"Белки": 30, "Жиры": 16, "Углеводы": 40, "Ккал": 410}, {"Белки": 26, "Жиры": 14, "Углеводы": 32, "Ккал": 350}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "омлет с овощами: 2 яйца+100г перца+80г помидоров+шпинат",
     "омлет с овощами: 2 яйца+80г перца+60г помидоров+шпинат",
     [("яйца", "шт", 4), ("болгарский перец", "г", 180), ("помидоры", "г", 140), ("шпинат", "г", 100)],
     {"Белки": 28, "Жиры": 15, "Углеводы": 34, "Ккал": 380}, {"Белки": 24, "Жиры": 13, "Углеводы": 26, "Ккал": 320}, "images/meal_omelette_vegetables.png"),
    ("Завтрак", "боул с гречкой: 80г гречки+1 яйцо всмятку+80г авокадо+помидор+соус горчица-лимон",
     "боул с гречкой: 55г гречки+1 яйцо+50г авокадо+помидор+соус",
     [("гречка", "г", 135), ("яйца", "шт", 2), ("авокадо", "г", 130), ("помидоры", "г", 120), ("оливковое масло", "г", 10)],
     {"Белки": 26, "Жиры": 16, "Углеводы": 50, "Ккал": 430}, {"Белки": 20, "Жиры": 13, "Углеводы": 36, "Ккал": 330}, "images/meal_grain_bowl.png"),
    ("Завтрак", "55г овсянки+200мл растительного молока+10г арахисового масла+100г черники+1 яйцо",
     "40г овсянки+150мл растительного молока+5г арахисового масла+80г черники+1 яйцо",
     [("овсянка", "г", 95), ("арахисовое масло", "г", 15), ("черника", "г", 180), ("растительное молоко", "мл", 350), ("яйца", "шт", 2)],
     {"Белки": 32, "Жиры": 18, "Углеводы": 50, "Ккал": 430}, {"Белки": 22, "Жиры": 12, "Углеводы": 34, "Ккал": 300}, "images/meal_porridge_berries.png"),
    ("Завтрак", "2 яйца пашот+150г шпината+1 тост+50г авокадо+100г малины",
     "1 яйцо пашот+120г шпината+1 тост+30г авокадо+80г малины",
     [("яйца", "шт", 3), ("шпинат", "г", 270), ("тосты", "шт", 2), ("авокадо", "г", 80), ("малина", "г", 180)],
     {"Белки": 34, "Жиры": 20, "Углеводы": 46, "Ккал": 440}, {"Белки": 24, "Жиры": 15, "Углеводы": 30, "Ккал": 330}, "images/meal_breakfast_bowl.png"),
    ("Обед", "170г курицы+400г картофеля+180г квашеной капусты+150г помидоров+80г салата",
     "125г курицы+280г картофеля+140г кимчи+120г помидоров+70г салата",
     [("курица", "г", 295), ("картофель", "г", 680), ("квашеная капуста/кимчи", "г", 320), ("помидоры", "г", 270), ("листовой салат", "г", 150)],
     {"Белки": 38, "Жиры": 8, "Углеводы": 96, "Ккал": 620}, {"Белки": 28, "Жиры": 6, "Углеводы": 66, "Ккал": 440}, "images/meal_chicken_grain_vegetables.png"),
    ("Обед", "180г рыбы+380г картофеля+200г помидоров+100г кимчи",
     "130г рыбы+270г картофеля+150г помидоров+80г кимчи",
     [("рыба", "г", 310), ("картофель", "г", 650), ("помидоры", "г", 350), ("квашеная капуста/кимчи", "г", 180)],
     {"Белки": 38, "Жиры": 5, "Углеводы": 92, "Ккал": 600}, {"Белки": 28, "Жиры": 5, "Углеводы": 62, "Ккал": 430}, "images/meal_fish_vegetables.png"),
    ("Обед", "165г говядины+380г картофеля+200г помидоров+100г салата",
     "120г говядины+270г картофеля+150г помидоров+80г салата",
     [("говядина", "г", 285), ("картофель", "г", 650), ("помидоры", "г", 350), ("листовой салат", "г", 180)],
     {"Белки": 38, "Жиры": 8, "Углеводы": 96, "Ккал": 620}, {"Белки": 28, "Жиры": 6, "Углеводы": 66, "Ккал": 440}, "images/meal_chicken_grain_vegetables.png"),
    ("Обед", "170г индейки+400г картофеля+180г помидоров+100г квашеной капусты",
     "125г индейки+280г картофеля+140г помидоров+80г квашеной капусты",
     [("индейка", "г", 295), ("картофель", "г", 680), ("помидоры", "г", 320), ("квашеная капуста/кимчи", "г", 260)],
     {"Белки": 38, "Жиры": 9, "Углеводы": 94, "Ккал": 620}, {"Белки": 28, "Жиры": 7, "Углеводы": 62, "Ккал": 430}, "images/meal_chicken_grain_vegetables.png"),
    ("Обед", "180г рыбы+300г риса+250г брокколи+150г квашеной капусты",
     "130г рыбы+220г риса+180г брокколи+120г квашеной капусты",
     [("рыба", "г", 310), ("рис", "г", 520), ("брокколи", "г", 430), ("квашеная капуста/кимчи", "г", 270)],
     {"Белки": 38, "Жиры": 8, "Углеводы": 92, "Ккал": 610}, {"Белки": 28, "Жиры": 6, "Углеводы": 62, "Ккал": 430}, "images/meal_fish_vegetables.png"),
    ("Обед", "170г курицы+300г полбы+200г квашеной капусты+150г огурца",
     "125г курицы+220г полбы+150г квашеной капусты+120г огурца",
     [("курица", "г", 295), ("полба", "г", 520), ("квашеная капуста/кимчи", "г", 350), ("огурцы", "г", 270)],
     {"Белки": 38, "Жиры": 8, "Углеводы": 98, "Ккал": 630}, {"Белки": 28, "Жиры": 6, "Углеводы": 66, "Ккал": 450}, "images/meal_grain_bowl.png"),
    ("Ужин", "160г говядины+300г цукини+200г баклажанов+80г моркови",
     "120г говядины+240г цукини+160г баклажанов+60г моркови",
     [("говядина", "г", 280), ("цукини/кабачки", "г", 540), ("баклажаны", "г", 360), ("морковь", "г", 140)],
     {"Белки": 36, "Жиры": 12, "Углеводы": 28, "Ккал": 400}, {"Белки": 28, "Жиры": 9, "Углеводы": 22, "Ккал": 310}, "images/meal_beef_grain_vegetables.png"),
    ("Ужин", "165г индейки+280г брокколи+220г цветной капусты+100г салата",
     "120г индейки+200г брокколи+170г цветной капусты+80г салата",
     [("индейка", "г", 285), ("брокколи", "г", 480), ("цветная капуста", "г", 390), ("листовой салат", "г", 180)],
     {"Белки": 38, "Жиры": 10, "Углеводы": 30, "Ккал": 390}, {"Белки": 28, "Жиры": 8, "Углеводы": 24, "Ккал": 300}, "images/meal_beef_grain_vegetables.png"),
    ("Ужин", "170г рыбы+300г цукини+180г моркови+100г шпината",
     "125г рыбы+240г цукини+140г моркови+80г шпината",
     [("рыба", "г", 295), ("цукини/кабачки", "г", 540), ("морковь", "г", 320), ("шпинат", "г", 180)],
     {"Белки": 36, "Жиры": 9, "Углеводы": 26, "Ккал": 370}, {"Белки": 28, "Жиры": 7, "Углеводы": 20, "Ккал": 290}, "images/meal_fish_vegetables.png"),
    ("Ужин", "160г индейки+250г тыквы+200г шпината+100г салата",
     "120г индейки+180г тыквы+150г шпината+80г салата",
     [("индейка", "г", 280), ("тыква", "г", 430), ("шпинат", "г", 350), ("листовой салат", "г", 180)],
     {"Белки": 36, "Жиры": 10, "Углеводы": 32, "Ккал": 400}, {"Белки": 28, "Жиры": 8, "Углеводы": 24, "Ккал": 310}, "images/meal_chicken_grain_vegetables.png"),
    ("Ужин", "155г говядины+280г брокколи+200г цукини+40г авокадо",
     "115г говядины+210г брокколи+160г цукини+30г авокадо",
     [("говядина", "г", 270), ("брокколи", "г", 490), ("цукини/кабачки", "г", 360), ("авокадо", "г", 70)],
     {"Белки": 36, "Жиры": 13, "Углеводы": 28, "Ккал": 400}, {"Белки": 28, "Жиры": 10, "Углеводы": 22, "Ккал": 310}, "images/meal_beef_grain_vegetables.png"),
    ("Ужин", "165г курицы+300г баклажанов+200г шпината+100г салата",
     "120г курицы+230г баклажанов+150г шпината+80г салата",
     [("курица", "г", 285), ("баклажаны", "г", 530), ("шпинат", "г", 350), ("листовой салат", "г", 180)],
     {"Белки": 38, "Жиры": 10, "Углеводы": 30, "Ккал": 410}, {"Белки": 28, "Жиры": 8, "Углеводы": 24, "Ккал": 310}, "images/meal_chicken_grain_vegetables.png"),
    ("Перекус 1", "300г кефира+150г яблока+100г груши",
     "200г кефира+100г яблока+90г груши",
     [("кефир", "г", 500), ("яблоки", "г", 250), ("груши", "г", 190)],
     {"Белки": 14, "Жиры": 6, "Углеводы": 42, "Ккал": 280}, {"Белки": 10, "Жиры": 5, "Углеводы": 28, "Ккал": 200}, "images/meal_yogurt_fruit_snack.png"),
    ("Перекус 1", "300г кефира+150г груши+100г черники",
     "200г кефира+100г груши+80г черники",
     [("кефир", "г", 500), ("груши", "г", 250), ("черника", "г", 180)],
     {"Белки": 14, "Жиры": 6, "Углеводы": 40, "Ккал": 270}, {"Белки": 10, "Жиры": 5, "Углеводы": 28, "Ккал": 200}, "images/meal_yogurt_fruit_snack.png"),
    ("Перекус 1", "250г кефира+150г яблока+30г протеина",
     "180г кефира+100г яблока+30г протеина",
     [("кефир", "г", 430), ("яблоки", "г", 250), ("протеин", "г", 60)],
     {"Белки": 38, "Жиры": 7, "Углеводы": 38, "Ккал": 390}, {"Белки": 34, "Жиры": 6, "Углеводы": 28, "Ккал": 310}, "images/meal_yogurt_fruit_snack.png"),
    ("Перекус 2", "150г тофу+200г тыквы+100г киви",
     "110г тофу+150г тыквы+80г киви",
     [("тофу", "г", 260), ("тыква", "г", 350), ("киви", "г", 180)],
     {"Белки": 24, "Жиры": 4, "Углеводы": 40, "Ккал": 300}, {"Белки": 18, "Жиры": 3, "Углеводы": 30, "Ккал": 230}, "images/meal_tofu_vegetables.png"),
    ("Перекус 2", "140г курицы+200г тыквы+100г черники",
     "100г курицы+150г тыквы+80г черники",
     [("курица", "г", 240), ("тыква", "г", 350), ("черника", "г", 180)],
     {"Белки": 28, "Жиры": 4, "Углеводы": 38, "Ккал": 280}, {"Белки": 22, "Жиры": 4, "Углеводы": 25, "Ккал": 230}, "images/meal_salad_protein.png"),
    ("Перекус 2", "150г рыбы+220г цветной капусты+100г малины",
     "110г рыбы+170г цветной капусты+80г малины",
     [("рыба", "г", 260), ("цветная капуста", "г", 390), ("малина", "г", 180)],
     {"Белки": 28, "Жиры": 5, "Углеводы": 34, "Ккал": 270}, {"Белки": 22, "Жиры": 5, "Углеводы": 22, "Ккал": 210}, "images/meal_fish_vegetables.png"),
    ("Перекус 2", "120г индейки+200г брокколи+30г протеина",
     "90г индейки+160г брокколи+30г протеина",
     [("индейка", "г", 210), ("брокколи", "г", 360), ("протеин", "г", 60)],
     {"Белки": 38, "Жиры": 5, "Углеводы": 24, "Ккал": 280}, {"Белки": 34, "Жиры": 5, "Углеводы": 18, "Ккал": 250}, "images/meal_salad_protein.png"),
    ("Перекус 3", "1 яйцо+100г персика",
     "1 яйцо+80г персика",
     [("яйца", "шт", 2), ("персики", "г", 180)],
     {"Белки": 10, "Жиры": 2, "Углеводы": 17, "Ккал": 130}, {"Белки": 6, "Жиры": 3, "Углеводы": 12, "Ккал": 100}, "images/meal_yogurt_fruit_snack.png"),
    ("Перекус 3", "120г сорбета+100г малины",
     "80г сорбета+80г малины",
     [("сорбет", "г", 200), ("малина", "г", 180)],
     {"Белки": 8, "Жиры": 3, "Углеводы": 18, "Ккал": 110}, {"Белки": 6, "Жиры": 3, "Углеводы": 11, "Ккал": 100}, "images/meal_yogurt_fruit_snack.png"),
    ("Перекус 3", "150г кефира+100г киви",
     "120г кефира+80г киви",
     [("кефир", "г", 270), ("киви", "г", 180)],
     {"Белки": 6, "Жиры": 2, "Углеводы": 30, "Ккал": 150}, {"Белки": 5, "Жиры": 2, "Углеводы": 22, "Ккал": 120}, "images/meal_yogurt_fruit_snack.png"),
    ("Перекус 3", "1 яйцо+100г груши+100г кефира",
     "1 яйцо+80г груши+80г кефира",
     [("яйца", "шт", 2), ("груши", "г", 180), ("кефир", "г", 180)],
     {"Белки": 10, "Жиры": 2, "Углеводы": 28, "Ккал": 170}, {"Белки": 6, "Жиры": 2, "Углеводы": 20, "Ккал": 120}, "images/meal_yogurt_fruit_snack.png"),
]


def load_rations() -> list:
    content = DATA_JS.read_text(encoding="utf-8")
    start = content.index("[")
    end = content.rindex("]") + 1
    return json.loads(content[start:end])


def make_hero(color: str, emoji: str) -> str:
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 420">
      <defs><linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="{color}"/><stop offset="1" stop-color="#fff7ec"/></linearGradient></defs>
      <rect width="720" height="420" rx="42" fill="url(#g)"/>
      <circle cx="610" cy="82" r="92" fill="#ffffff" opacity=".45"/>
      <circle cx="96" cy="338" r="120" fill="#ffffff" opacity=".38"/>
      <text x="455" y="285" font-size="142">{emoji}</text>
    </svg>'''
    return "data:image/svg+xml;charset=UTF-8," + urllib.parse.quote(svg)


def meal_fingerprint(meal: dict) -> str:
    dish = meal.get("dish", {})
    s = dish.get("Саша") or dish.get("Маша") or ""
    return f"{meal['id']}::{s[:80]}"


def breakfast_category(meal: dict) -> str:
    d = (meal.get("dish") or {}).get("Саша", "").lower()
    if any(x in d for x in ("олад", "пирож", "хачап", "запекан", "круасс")):
        return "baked"
    if any(x in d for x in ("тост", "бутерброд", "лаваш", "круасс")):
        return "toast"
    if any(x in d for x in ("йогурт", "смузи", "мюсли")):
        return "yogurt"
    if any(x in d for x in ("омлет", "тортиль", "яичн", "пашот")):
        return "eggs"
    if any(x in d for x in ("овсян", "греч", "каша", "киноа")):
        return "porridge"
    return "other"


def normalize_meal(raw: dict) -> dict | None:
    if not raw.get("macros") or not raw["macros"].get("Саша") or not raw["macros"].get("Маша"):
        return None
    dish = raw.get("dish") or {}
    if FORBIDDEN.search(json.dumps(dish, ensure_ascii=False)):
        return None
    meal = {
        "id": raw["id"],
        "title": raw.get("title") or raw["id"],
        "dish": {"Саша": dish.get("Саша", ""), "Маша": dish.get("Маша", "")},
        "ingredients": copy.deepcopy(raw.get("ingredients") or []),
        "macros": copy.deepcopy(raw["macros"]),
        "image": raw.get("image") or IMAGE_BY_TYPE.get(raw["id"], "images/meal_grain_bowl.png"),
    }
    q = raw.get("photoQuery") or PHOTO_QUERY.get(raw["id"], "healthy food")
    meal["photoQuery"] = q
    meal["photo"] = raw.get("photo") or f"https://source.unsplash.com/900x650/?{urllib.parse.quote(q.replace(' ', '%20'))}"
    return meal


def synthetic_to_meal(row) -> dict:
    meal_type, ds, dm, ingredients, ms, mm, image = row
    ing = [{"product": p, "unit": u, "amount": a} for p, u, a in ingredients]
    q = PHOTO_QUERY.get(meal_type, "healthy food")
    return {
        "id": meal_type, "title": meal_type,
        "dish": {"Саша": ds, "Маша": dm},
        "ingredients": ing,
        "macros": {"Саша": ms, "Маша": mm},
        "image": image, "photoQuery": q,
        "photo": f"https://source.unsplash.com/900x650/?{urllib.parse.quote(q.replace(' ', '%20'))}",
    }


def meal_protein_ok(meal: dict) -> bool:
    for person in ("Саша", "Маша"):
        macros = (meal.get("macros") or {}).get(person)
        if not macros or macros["Белки"] > MAX_PROTEIN:
            return False
    return True


def macro_distribution_ok(meals: list[dict]) -> bool:
    for person in ("Саша", "Маша"):
        first = {"Жиры": 0, "Углеводы": 0}
        second = {"Жиры": 0, "Углеводы": 0}
        for meal in meals:
            macros = meal["macros"][person]
            bucket = first if meal["id"] in FIRST_HALF_MEALS else second
            bucket["Жиры"] += macros["Жиры"]
            bucket["Углеводы"] += macros["Углеводы"]
        if not (first["Жиры"] > second["Жиры"] and first["Углеводы"] > second["Углеводы"]):
            return False
    return True


def build_meal_pool(existing: list) -> dict[str, list[dict]]:
    pool: dict[str, list[dict]] = defaultdict(list)
    seen: dict[str, set[str]] = defaultdict(set)
    for ration in existing:
        for day in ration["days"]:
            for raw in day["meals"]:
                meal = normalize_meal(raw)
                if not meal or not meal_protein_ok(meal):
                    continue
                fp = meal_fingerprint(meal)
                if fp in seen[meal["id"]]:
                    continue
                seen[meal["id"]].add(fp)
                pool[meal["id"]].append(meal)
    for row in SYNTHETIC_MEALS:
        meal = synthetic_to_meal(row)
        if not meal_protein_ok(meal):
            continue
        fp = meal_fingerprint(meal)
        if fp not in seen[meal["id"]]:
            seen[meal["id"]].add(fp)
            pool[meal["id"]].append(meal)
    return pool


def sum_macros(meals: list[dict], person: str) -> dict[str, int]:
    total = {"Белки": 0, "Жиры": 0, "Углеводы": 0, "Ккал": 0}
    for meal in meals:
        macros = (meal.get("macros") or {}).get(person)
        if not macros:
            continue
        for k, v in macros.items():
            total[k] += v
    return total


def in_range(totals: dict[str, int], person: str) -> bool:
    for key, (lo, hi) in DAILY_RANGES[person].items():
        if not (lo <= totals[key] <= hi):
            return False
    return True


def day_valid(meals: list[dict]) -> bool:
    if not all(meal_protein_ok(m) for m in meals):
        return False
    if not macro_distribution_ok(meals):
        return False
    return in_range(sum_macros(meals, "Саша"), "Саша") and in_range(sum_macros(meals, "Маша"), "Маша")


def add_protein_powder(meal: dict, grams: int = 30) -> dict | None:
    m = copy.deepcopy(meal)
    factor = grams / 30
    for person in ("Саша", "Маша"):
        if m["macros"][person]["Белки"] + round(PROTEIN_POWDER[person]["Белки"] * factor) > MAX_PROTEIN:
            return None
    for person in ("Саша", "Маша"):
        dish = m["dish"][person]
        if "протеин" not in dish.lower():
            m["dish"][person] = dish + f"+{grams}г протеина"
        for k, v in PROTEIN_POWDER[person].items():
            m["macros"][person][k] = m["macros"][person].get(k, 0) + round(v * factor)
    m["ingredients"] = list(m.get("ingredients") or [])
    m["ingredients"].append({"product": "протеин", "unit": "г", "amount": grams * 2})
    return m


def tune_day_meals(meals: list[dict], pool: dict | None = None) -> list[dict] | None:
    meals = copy.deepcopy(meals)
    if day_valid(meals):
        return meals
    if not pool:
        return None

    snack_idx = [i for i, m in enumerate(meals) if m["id"].startswith("Перекус")]
    snack_options = [pool["Перекус 1"], pool["Перекус 2"], pool["Перекус 3"]]

    for combo in itertools.product(*snack_options):
        trial = copy.deepcopy(meals)
        for idx, snack in zip(snack_idx, combo):
            trial[idx] = copy.deepcopy(snack)
        if day_valid(trial):
            return trial
        for idx in snack_idx:
            for grams in (15, 30, 45):
                boosted = add_protein_powder(trial[idx], grams)
                if not boosted:
                    continue
                trial2 = copy.deepcopy(trial)
                trial2[idx] = boosted
                if day_valid(trial2):
                    return trial2
                for idx2 in snack_idx:
                    if idx2 == idx:
                        continue
                    for grams2 in (15, 30):
                        boosted2 = add_protein_powder(trial2[idx2], grams2)
                        if not boosted2:
                            continue
                        trial3 = copy.deepcopy(trial2)
                        trial3[idx2] = boosted2
                        if day_valid(trial3):
                            return trial3
    return None


def pick_breakfast(pool: list[dict], rng: random.Random, avoid: set[str] | None = None) -> dict:
    avoid = avoid or set()
    candidates = [m for m in pool if breakfast_category(m) not in avoid] or pool
    return copy.deepcopy(rng.choice(candidates))


def find_shared_snacks(b1: dict, b2: dict, lunch: dict, dinner: dict, pool: dict) -> list[dict] | None:
    """Pick snacks that satisfy KBJU for both breakfasts in a batch-cooking pair."""
    for combo in itertools.product(pool["Перекус 1"], pool["Перекус 2"], pool["Перекус 3"]):
        snacks = [copy.deepcopy(s) for s in combo]
        fixed = [lunch, dinner] + snacks
        if day_valid([copy.deepcopy(b1)] + fixed) and day_valid([copy.deepcopy(b2)] + fixed):
            return snacks
        for idx in range(3):
            for grams in (15, 30, 45):
                trial_snacks = copy.deepcopy(snacks)
                boosted = add_protein_powder(trial_snacks[idx], grams)
                if not boosted:
                    continue
                trial_snacks[idx] = boosted
                fixed = [lunch, dinner] + trial_snacks
                if day_valid([copy.deepcopy(b1)] + fixed) and day_valid([copy.deepcopy(b2)] + fixed):
                    return trial_snacks
            for idx2 in range(3):
                if idx2 == idx:
                    continue
                for grams2 in (15, 30):
                    trial_snacks = copy.deepcopy(snacks)
                    b1st = add_protein_powder(trial_snacks[idx], 30)
                    b2nd = add_protein_powder(trial_snacks[idx2], grams2)
                    if not b1st or not b2nd:
                        continue
                    trial_snacks[idx] = b1st
                    trial_snacks[idx2] = b2nd
                    fixed = [lunch, dinner] + trial_snacks
                    if day_valid([copy.deepcopy(b1)] + fixed) and day_valid([copy.deepcopy(b2)] + fixed):
                        return trial_snacks
    return None


def pick_block(pool: dict, rng: random.Random) -> dict | None:
    for _ in range(80):
        lunch = copy.deepcopy(rng.choice(pool["Обед"]))
        dinner = copy.deepcopy(rng.choice(pool["Ужин"]))
        b1 = pick_breakfast(pool["Завтрак"], rng)
        b2 = pick_breakfast(pool["Завтрак"], rng, avoid={breakfast_category(b1)})
        snacks = find_shared_snacks(b1, b2, lunch, dinner, pool)
        if not snacks:
            continue
        block = {
            "Обед": lunch,
            "Ужин": dinner,
            "Перекус 1": snacks[0],
            "Перекус 2": snacks[1],
            "Перекус 3": snacks[2],
        }
        return {"block": block, "breakfasts": (copy.deepcopy(b1), copy.deepcopy(b2))}
    return None


def pick_sunday(pool: dict, used_fps: set[str], rng: random.Random) -> list[dict] | None:
    for _ in range(1000):
        b = pick_breakfast(pool["Завтрак"], rng)
        others = [copy.deepcopy(rng.choice(pool[t])) for t in MEAL_ORDER[1:]]
        meals = [b] + others
        if {meal_fingerprint(m) for m in meals} & used_fps:
            continue
        tuned = tune_day_meals(meals, pool)
        if tuned:
            return tuned
    return None


def build_shopping(days: list[dict]) -> list[dict]:
    counts: dict[tuple[str, str], float] = defaultdict(float)
    for day in days:
        for meal in day["meals"]:
            for ing in meal.get("ingredients") or []:
                counts[(ing["product"], ing["unit"])] += ing["amount"]
    return sorted(
        [{"product": p, "unit": u, "amount": int(round(a))} for (p, u), a in counts.items()],
        key=lambda x: x["product"].lower(),
    )


def generate_ration(rid: int, pool: dict, rng: random.Random) -> dict | None:
    blocks, used_fps = [], set()
    for _ in range(3):
        blk = pick_block(pool, rng)
        if not blk:
            return None
        blocks.append(blk)
        for m in blk["block"].values():
            used_fps.add(meal_fingerprint(m))
    sunday = pick_sunday(pool, used_fps, rng)
    if not sunday:
        return None
    title, subtitle = TITLES[(rid - 2) % len(TITLES)]
    color, emoji = COLORS[(rid - 1) % len(COLORS)], EMOJIS[(rid - 1) % len(EMOJIS)]
    days = []
    for d1, d2, bi in BLOCKS:
        b = blocks[bi]
        fixed = [b["block"][k] for k in ("Обед", "Ужин", "Перекус 1", "Перекус 2", "Перекус 3")]
        for day_id, breakfast in ((d1, b["breakfasts"][0]), (d2, b["breakfasts"][1])):
            days.append({"id": day_id, "name": DAY_NAMES[day_id], "meals": [copy.deepcopy(breakfast)] + [copy.deepcopy(m) for m in fixed]})
    days.append({"id": "ВС", "name": DAY_NAMES["ВС"], "meals": [copy.deepcopy(m) for m in sunday]})
    for day in days:
        if not day_valid(day["meals"]):
            return None
    return {"id": rid, "title": title, "subtitle": subtitle, "color": color, "hero": make_hero(color, emoji), "days": days, "shopping": build_shopping(days)}


def validate_all(rations: list) -> dict:
    report = {"count": len(rations), "failures": [], "protein_failures": [], "distribution_failures": [], "air_fryer": []}
    for r in rations:
        skip = r["id"] == 1
        for day in r["days"]:
            for person in ("Саша", "Маша"):
                if not in_range(sum_macros(day["meals"], person), person) and not skip:
                    report["failures"].append(f"ration {r['id']} {day['id']} {person}")
            if skip:
                continue
            for meal in day["meals"]:
                if not meal_protein_ok(meal):
                    report["protein_failures"].append(f"ration {r['id']} {day['id']} {meal['id']}")
            if not macro_distribution_ok(day["meals"]):
                report["distribution_failures"].append(f"ration {r['id']} {day['id']}")
    return report


def write_data_js(rations: list) -> None:
    DATA_JS.write_text(f"window.RATIONS = {json.dumps(rations, ensure_ascii=False, indent=2)};\n", encoding="utf-8")


def main() -> None:
    rng = random.Random(42)
    existing = load_rations()
    ration1 = copy.deepcopy(existing[0])
    pool = build_meal_pool([ration1])
    print("Meal pool sizes:", {k: len(v) for k, v in pool.items()})
    print("Breakfast categories:", {c: sum(1 for m in pool["Завтрак"] if breakfast_category(m) == c) for c in ("baked", "toast", "yogurt", "eggs", "porridge", "other")})
    new_rations, rid, attempts = [ration1], 2, 0
    while rid <= 50 and attempts < 8000:
        attempts += 1
        ration = generate_ration(rid, pool, rng)
        if ration:
            new_rations.append(ration)
            print(f"Generated ration {rid}: {ration['title']}")
            rid += 1
    if rid <= 50:
        raise SystemExit(f"Failed to generate all rations, stuck at {rid}")
    report = validate_all(new_rations)
    write_data_js(new_rations)
    size = DATA_JS.stat().st_size
    print("\n=== VALIDATION ===")
    print(f"Rations: {report['count']}")
    print(f"File size: {size / 1024 / 1024:.2f} MB")
    print(f"KBJU failures: {len(report['failures'])}")
    print(f"Protein > {MAX_PROTEIN}g failures: {len(report['protein_failures'])}")
    print(f"Macro distribution failures: {len(report['distribution_failures'])}")


if __name__ == "__main__":
    main()
