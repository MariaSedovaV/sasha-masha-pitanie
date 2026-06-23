window.RATIONS = [
  {
    "id": 1,
    "title": "Баланс на каждый день",
    "subtitle": "Базовая неделя с понятными блюдами, ягодами и мягким дефицитом",
    "color": "#f8cdda",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23f8cdda%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%A5%A3%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "50г овсянки+200мл миндального молока+10г арах.масла+100г черники+1 яйцо",
              "Маша": "40г овсянки+150мл миндального молока+5г арах.масла+80г черники+1 яйцо"
            },
            "ingredients": [
              {
                "product": "арахисовое масло",
                "unit": "г",
                "amount": 15
              },
              {
                "product": "овсянка",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 350
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 18,
                "Углеводы": 50,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 34,
                "Ккал": 300
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "220г курицы+400г картофеля+200г кимчи+100г огурца",
              "Маша": "160г курицы+250г картофеля+150г кимчи+100г огурца"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 200
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 8,
                "Углеводы": 94,
                "Ккал": 640
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 6,
                "Углеводы": 58,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г говядины+300г кабачков+150г моркови+50г авокадо",
              "Маша": "150г говядины+250г кабачков+100г моркови+30г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 80
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 550
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 46,
                "Жиры": 14,
                "Углеводы": 48,
                "Ккал": 510
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 14,
                "Углеводы": 34,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г груши",
              "Маша": "200г кефира+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г тофу+200г тыквы+100г киви",
              "Маша": "100г тофу+150г тыквы+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тофу",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 24,
                "Жиры": 4,
                "Углеводы": 40,
                "Ккал": 300
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 3,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г персика",
              "Маша": "1 яйцо+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 10,
                "Жиры": 2,
                "Углеводы": 17,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 5,
                "Углеводы": 10,
                "Ккал": 110
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "2 яйца пашот+150г шпината+1 тост+50г авокадо+100г малины",
              "Маша": "1 яйцо пашот+120г шпината+1 тост+30г авокадо+80г малины"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 80
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 20,
                "Углеводы": 46,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 30,
                "Ккал": 330
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "220г курицы+400г картофеля+200г кимчи+100г огурца",
              "Маша": "160г курицы+250г картофеля+150г кимчи+100г огурца"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 200
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 8,
                "Углеводы": 94,
                "Ккал": 640
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 6,
                "Углеводы": 58,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г говядины+300г кабачков+150г моркови+50г авокадо",
              "Маша": "150г говядины+250г кабачков+100г моркови+30г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 80
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 550
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 46,
                "Жиры": 14,
                "Углеводы": 48,
                "Ккал": 510
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 14,
                "Углеводы": 34,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г груши",
              "Маша": "200г кефира+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г тофу+200г тыквы+100г киви",
              "Маша": "100г тофу+150г тыквы+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тофу",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 24,
                "Жиры": 4,
                "Углеводы": 40,
                "Ккал": 300
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 3,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г персика",
              "Маша": "1 яйцо+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 10,
                "Жиры": 2,
                "Углеводы": 17,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 5,
                "Углеводы": 10,
                "Ккал": 110
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет из 2 яиц+150г шпината+1 тост+10г арах.масла+100г черники",
            "dish": {
              "Саша": "омлет из 2 яиц+150г шпината+1 тост+10г арах.масла+100г черники",
              "Маша": "омлет из 1 яйца+120г шпината+1 тост+5г арах.масла+80г черники"
            },
            "ingredients": [
              {
                "product": "арахисовое масло",
                "unit": "г",
                "amount": 15
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 18,
                "Углеводы": 40,
                "Ккал": 400
              },
              "Маша": {
                "Белки": 20,
                "Жиры": 14,
                "Углеводы": 30,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "240г рыбы+380г картофеля+200г помидоров+100г кимчи",
              "Маша": "180г рыбы+300г картофеля+150г помидоров+80г кимчи"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 680
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 420
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 5,
                "Углеводы": 92,
                "Ккал": 620
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 4,
                "Углеводы": 68,
                "Ккал": 480
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г индейки+250г гречки+200г баклажанов+30г авокадо",
              "Маша": "150г индейки+180г гречки (50г сухой)+150г баклажанов+20г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "сухой",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 12,
                "Углеводы": 52,
                "Ккал": 520
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 10,
                "Углеводы": 42,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г кефира+2 яйца+150г яблока",
              "Маша": "200г кефира+1 яйцо+100г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 28,
                "Жиры": 14,
                "Углеводы": 40,
                "Ккал": 420
              },
              "Маша": {
                "Белки": 20,
                "Жиры": 10,
                "Углеводы": 30,
                "Ккал": 290
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "100г тофу+200г кабачков+100г груши",
              "Маша": "80г тофу+150г кабачков+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тофу",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 18,
                "Жиры": 3,
                "Углеводы": 40,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 14,
                "Жиры": 3,
                "Углеводы": 30,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "150г кефира+100г киви",
              "Маша": ""
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 150
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 100
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 6,
                "Жиры": 2,
                "Углеводы": 30,
                "Ккал": 150
              },
              "Маша": null
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "50г киноа+150г тыквы+100г малины+150мл миндального молока+1 яйцо",
              "Маша": "40г киноа+120г тыквы+80г малины+150мл миндального молока"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 300
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 1
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 28,
                "Жиры": 14,
                "Углеводы": 58,
                "Ккал": 420
              },
              "Маша": {
                "Белки": 18,
                "Жиры": 10,
                "Углеводы": 48,
                "Ккал": 350
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "240г рыбы+380г картофеля+200г помидоров+100г кимчи",
              "Маша": "180г рыбы+300г картофеля+150г помидоров+80г кимчи"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 680
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 420
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 5,
                "Углеводы": 92,
                "Ккал": 620
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 4,
                "Углеводы": 68,
                "Ккал": 480
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г индейки+250г гречки+200г баклажанов+30г авокадо",
              "Маша": "150г индейки+180г гречки (50г сухой)+150г баклажанов+20г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "сухой",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 12,
                "Углеводы": 52,
                "Ккал": 520
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 10,
                "Углеводы": 42,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г кефира+2 яйца+150г яблока",
              "Маша": "200г кефира+1 яйцо+100г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 28,
                "Жиры": 14,
                "Углеводы": 40,
                "Ккал": 420
              },
              "Маша": {
                "Белки": 20,
                "Жиры": 10,
                "Углеводы": 30,
                "Ккал": 290
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "100г тофу+200г кабачков+100г груши",
              "Маша": "80г тофу+150г кабачков+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тофу",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 18,
                "Жиры": 3,
                "Углеводы": 40,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 14,
                "Жиры": 3,
                "Углеводы": 30,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "150г кефира+100г киви",
              "Маша": ""
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 150
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 100
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 6,
                "Жиры": 2,
                "Углеводы": 30,
                "Ккал": 150
              },
              "Маша": null
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "2 яйца всмятку+150г овсянки на воде+100г черники+10г арах.масла",
              "Маша": "1 яйцо всмятку+120г овсянки на воде+80г черники+5г арах.масла"
            },
            "ingredients": [
              {
                "product": "арахисовое масло",
                "unit": "г",
                "amount": 15
              },
              {
                "product": "овсянка",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 16,
                "Углеводы": 44,
                "Ккал": 390
              },
              "Маша": {
                "Белки": 20,
                "Жиры": 12,
                "Углеводы": 34,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "220г курицы+400г картофеля+150г помидоров+150г кимчи",
              "Маша": "160г курицы+250г картофеля+120г помидоров+120г кимчи"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 270
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 8,
                "Углеводы": 58,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г говядины+300г киноа+200г цуккини+40г авокадо",
              "Маша": "150г говядины+200г киноа (55г сухой)+150г цуккини+25г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "сухой",
                "unit": "г",
                "amount": 55
              },
              {
                "product": "цуккини",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 12,
                "Углеводы": 42,
                "Ккал": 420
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши",
              "Маша": "200г кефира+100г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 6,
                "Углеводы": 30,
                "Ккал": 220
              },
              "Маша": {
                "Белки": 8,
                "Жиры": 5,
                "Углеводы": 24,
                "Ккал": 180
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г тофу+200г тыквы+100г яблока",
              "Маша": "100г тофу+150г тыквы+80г яблока"
            },
            "ingredients": [
              {
                "product": "тофу",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 24,
                "Жиры": 4,
                "Углеводы": 46,
                "Ккал": 320
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 4,
                "Углеводы": 34,
                "Ккал": 240
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г персика+100г кефира",
              "Маша": "1 яйцо+80г персика+50г кефира"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 150
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 10,
                "Жиры": 2,
                "Углеводы": 28,
                "Ккал": 170
              },
              "Маша": {
                "Белки": 8,
                "Жиры": 4,
                "Углеводы": 15,
                "Ккал": 130
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "тофу-скрэмбл (150г тофу+1 яйцо+шпинат)+1 тост+100г малины",
            "dish": {
              "Саша": "тофу-скрэмбл (150г тофу+1 яйцо+шпинат)+1 тост+100г малины",
              "Маша": "тофу-скрэмбл (100г тофу+1 яйцо+шпинат)+1 тост+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тофу",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 28,
                "Жиры": 18,
                "Углеводы": 50,
                "Ккал": 410
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 36,
                "Ккал": 360
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "220г курицы+400г картофеля+150г помидоров+150г кимчи",
              "Маша": "160г курицы+250г картофеля+120г помидоров+120г кимчи"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 270
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 8,
                "Углеводы": 58,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г говядины+300г киноа+200г цуккини+40г авокадо",
              "Маша": "150г говядины+200г киноа (55г сухой)+150г цуккини+25г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "сухой",
                "unit": "г",
                "amount": 55
              },
              {
                "product": "цуккини",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 12,
                "Углеводы": 42,
                "Ккал": 420
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши",
              "Маша": "200г кефира+100г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 6,
                "Углеводы": 30,
                "Ккал": 220
              },
              "Маша": {
                "Белки": 8,
                "Жиры": 5,
                "Углеводы": 24,
                "Ккал": 180
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г тофу+200г тыквы+100г яблока",
              "Маша": "100г тофу+150г тыквы+80г яблока"
            },
            "ingredients": [
              {
                "product": "тофу",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 24,
                "Жиры": 4,
                "Углеводы": 46,
                "Ккал": 320
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 4,
                "Углеводы": 34,
                "Ккал": 240
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г персика+100г кефира",
              "Маша": "1 яйцо+80г персика+50г кефира"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 150
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 10,
                "Жиры": 2,
                "Углеводы": 28,
                "Ккал": 170
              },
              "Маша": {
                "Белки": 8,
                "Жиры": 4,
                "Углеводы": 15,
                "Ккал": 130
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет из 2 яиц+150г кабачков+1 тост+10г арах.масла+100г черники",
            "dish": {
              "Саша": "омлет из 2 яиц+150г кабачков+1 тост+10г арах.масла+100г черники",
              "Маша": "омлет из 1 яйца+120г кабачков+1 тост+5г арах.масла+80г черники"
            },
            "ingredients": [
              {
                "product": "арахисовое масло",
                "unit": "г",
                "amount": 15
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 18,
                "Углеводы": 44,
                "Ккал": 400
              },
              "Маша": {
                "Белки": 18,
                "Жиры": 12,
                "Углеводы": 30,
                "Ккал": 290
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "240г рыбы+380г картофеля+200г кимчи+100г огурца",
              "Маша": "180г рыбы+250г картофеля+150г кимчи+100г огурца"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 630
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 200
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 420
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 5,
                "Углеводы": 92,
                "Ккал": 620
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 4,
                "Углеводы": 58,
                "Ккал": 470
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "200г рыбы+250г гречки+200г шпината+40г авокадо",
              "Маша": "150г рыбы+180г гречки+150г шпината+25г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 56,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 12,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_salmon_avocado_toast.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г малины",
              "Маша": "200г кефира+100г яблока+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 8,
                "Углеводы": 42,
                "Ккал": 320
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 6,
                "Углеводы": 32,
                "Ккал": 230
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г тофу+200г тыквы+100г киви",
              "Маша": "100г тофу+150г тыквы+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тофу",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 24,
                "Жиры": 5,
                "Углеводы": 40,
                "Ккал": 310
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 5,
                "Углеводы": 30,
                "Ккал": 240
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г груши",
              "Маша": "1 яйцо+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 10,
                "Жиры": 2,
                "Углеводы": 20,
                "Ккал": 140
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 5,
                "Углеводы": 12,
                "Ккал": 120
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 535
      },
      {
        "product": "арахисовое масло",
        "unit": "г",
        "amount": 60
      },
      {
        "product": "баклажаны",
        "unit": "г",
        "amount": 700
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 1400
      },
      {
        "product": "гречка",
        "unit": "г",
        "amount": 1290
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1400
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 700
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 4590
      },
      {
        "product": "квашеная капуста/кимчи",
        "unit": "г",
        "amount": 1950
      },
      {
        "product": "кефир",
        "unit": "г",
        "amount": 4000
      },
      {
        "product": "киви",
        "unit": "г",
        "amount": 740
      },
      {
        "product": "киноа",
        "unit": "г",
        "amount": 1090
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1520
      },
      {
        "product": "малина",
        "unit": "г",
        "amount": 720
      },
      {
        "product": "морковь",
        "unit": "г",
        "amount": 500
      },
      {
        "product": "овсянка",
        "unit": "г",
        "amount": 360
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 600
      },
      {
        "product": "персики",
        "unit": "г",
        "amount": 720
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 1240
      },
      {
        "product": "рыба",
        "unit": "г",
        "amount": 1610
      },
      {
        "product": "сухой",
        "unit": "г",
        "amount": 210
      },
      {
        "product": "тофу",
        "unit": "г",
        "amount": 1860
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 2020
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 2070
      },
      {
        "product": "цуккини",
        "unit": "г",
        "amount": 700
      },
      {
        "product": "черника",
        "unit": "г",
        "amount": 720
      },
      {
        "product": "шпинат",
        "unit": "г",
        "amount": 890
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1610
      },
      {
        "product": "растительное молоко",
        "unit": "мл",
        "amount": 650
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 8
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 33
      }
    ]
  },
  {
    "id": 2,
    "title": "Овощной ритм",
    "subtitle": "Сытная неделя с заготовками, овощами и спокойной ротацией белка",
    "color": "#c9e4de",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23c9e4de%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%A5%A6%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "60г риса+220мл растительного молока+100г черники+1 яйцо+25г твердого сыра",
              "Маша": "45г риса+170мл растительного молока+80г черники+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 40
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 16,
                "Углеводы": 54,
                "Ккал": 450
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "230г курицы+420г картофеля+180г квашеной капусты+150г помидоров+80г листового салата",
              "Маша": "165г курицы+280г картофеля+140г квашеной капусты+120г помидоров+70г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 700
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 150
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 270
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 8,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 7,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "210г говядины+250г цукини+200г баклажанов+120г моркови",
              "Маша": "150г говядины+200г цукини+150г баклажанов+90г моркови"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 360
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 450
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 54,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 38,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+120г груши",
              "Маша": "200г кефира+100г яблока+90г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "170г индейки+220г брокколи+100г киви",
              "Маша": "120г индейки+170г брокколи+80г киви"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 5,
                "Углеводы": 34,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 17,
                "Жиры": 5,
                "Углеводы": 24,
                "Ккал": 220
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "120г сорбета+100г малины",
              "Маша": "80г сорбета+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 200
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 110
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет из 2 яиц+180г шпината+40г полбы+100г малины",
            "dish": {
              "Саша": "омлет из 2 яиц+180г шпината+40г полбы+100г малины",
              "Маша": "омлет из 1 яйца+140г шпината+30г полбы+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 17,
                "Углеводы": 48,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 34,
                "Ккал": 320
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "250г рыбы+300г риса+250г брокколи+150г квашеной капусты",
              "Маша": "180г рыбы+220г риса+180г брокколи+120г квашеной капусты"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 630
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 7,
                "Углеводы": 62,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "220г индейки+260г полбы+220г цветной капусты+100г листового салата",
              "Маша": "160г индейки+190г полбы+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 49,
                "Жиры": 14,
                "Углеводы": 56,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 10,
                "Углеводы": 40,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г яблока",
              "Маша": "200г кефира+110г персика+80г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 40,
                "Ккал": 270
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г курицы+200г тыквы+100г черники",
              "Маша": "110г курицы+150г тыквы+80г черники"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 4,
                "Углеводы": 38,
                "Ккал": 250
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 4,
                "Углеводы": 25,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г груши",
              "Маша": "1 яйцо+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 9,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "55г киноа+200мл растительного молока+100г киви+1 яйцо",
              "Маша": "40г киноа+160мл растительного молока+80г киви+1 яйцо"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 360
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "230г говядины+380г картофеля+200г помидоров+100г листового салата",
              "Маша": "165г говядины+270г картофеля+150г помидоров+80г листового салата"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 8,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 6,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "220г рыбы+260г риса+220г цукини+150г моркови",
              "Маша": "160г рыбы+190г риса+170г цукини+110г моркови"
            },
            "ingredients": [
              {
                "product": "морковь",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 13,
                "Углеводы": 50,
                "Ккал": 520
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 10,
                "Углеводы": 42,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "280г кефира+150г груши+100г черники",
              "Маша": "200г кефира+100г груши+80г черники"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "170г индейки+220г цветной капусты+100г яблока",
              "Маша": "120г индейки+170г цветной капусты+80г яблока"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 5,
                "Углеводы": 36,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г малины",
              "Маша": "80г сорбета+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "2 яйца+180г шпината+50г риса+100г персика+20г твердого сыра",
              "Маша": "1 яйцо+140г шпината+40г риса+80г персика+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 16,
                "Углеводы": 56,
                "Ккал": 460
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 340
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "240г курицы+300г полбы+200г квашеной капусты+150г огурца",
              "Маша": "170г курицы+220г полбы+150г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 350
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 9,
                "Углеводы": 98,
                "Ккал": 660
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 7,
                "Углеводы": 66,
                "Ккал": 470
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "210г говядины+260г тыквы+220г брокколи+100г листового салата",
              "Маша": "150г говядины+200г тыквы+170г брокколи+80г листового салата"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 360
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 460
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 46,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 11,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г киви",
              "Маша": "200г кефира+100г яблока+80г киви"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "160г рыбы+220г цветной капусты+100г малины",
              "Маша": "120г рыбы+170г цветной капусты+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 280
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 5,
                "Углеводы": 34,
                "Ккал": 270
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г груши",
              "Маша": "1 яйцо+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "60г полбы+220мл растительного молока+100г черники+1 яйцо",
              "Маша": "45г полбы+170мл растительного молока+80г черники+1 яйцо"
            },
            "ingredients": [
              {
                "product": "полба",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 34,
                "Ккал": 300
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "230г индейки+400г картофеля+180г помидоров+100г квашеной капусты",
              "Маша": "165г индейки+280г картофеля+140г помидоров+80г квашеной капусты"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 680
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 320
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 8,
                "Углеводы": 62,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "220г рыбы+260г киноа+220г баклажанов+100г листового салата",
              "Маша": "160г рыбы+190г киноа+170г баклажанов+80г листового салата"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 380
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 40,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г персика",
              "Маша": "200г кефира+100г груши+80г персика"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 38,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 5,
                "Углеводы": 26,
                "Ккал": 190
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г курицы+220г брокколи+100г яблока",
              "Маша": "110г курицы+170г брокколи+80г яблока"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 4,
                "Углеводы": 38,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 4,
                "Углеводы": 25,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "120г сорбета+100г малины",
              "Маша": "80г сорбета+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 200
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 19,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет из 2 яиц+160г цукини+50г киноа+100г малины",
            "dish": {
              "Саша": "омлет из 2 яиц+160г цукини+50г киноа+100г малины",
              "Маша": "омлет из 1 яйца+130г цукини+40г киноа+80г малины"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 460
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 330
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "250г рыбы+300г риса+220г цветной капусты+150г квашеной капусты",
              "Маша": "180г рыбы+220г риса+170г цветной капусты+120г квашеной капусты"
            },
            "ingredients": [
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 9,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 8,
                "Углеводы": 64,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "220г курицы+300г тыквы+200г шпината+100г листового салата",
              "Маша": "160г курицы+220г тыквы+150г шпината+80г листового салата"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 54,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 11,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г черники",
              "Маша": "200г кефира+100г яблока+80г черники"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 15,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "160г говядины+220г брокколи+100г киви",
              "Маша": "115г говядины+170г брокколи+80г киви"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 275
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 4,
                "Углеводы": 34,
                "Ккал": 250
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "1 яйцо+100г персика",
              "Маша": "1 яйцо+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 110
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "Завтрак",
            "dish": {
              "Саша": "55г риса+220мл растительного молока+100г груши+1 яйцо+20г твердого сыра",
              "Маша": "40г риса+170мл растительного молока+80г груши+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "Обед",
            "dish": {
              "Саша": "240г индейки+380г картофеля+200г брокколи+120г помидоров",
              "Маша": "170г индейки+270г картофеля+160г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 360
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 8,
                "Углеводы": 98,
                "Ккал": 660
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 6,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "Ужин",
            "dish": {
              "Саша": "230г говядины+260г полбы+220г цукини+100г листового салата",
              "Маша": "165г говядины+190г полбы+170г цукини+80г листового салата"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 40,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г малины",
              "Маша": "200г кефира+100г яблока+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 40,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 27,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г рыбы+220г тыквы+100г киви",
              "Маша": "110г рыбы+170г тыквы+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 5,
                "Углеводы": 37,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г черники",
              "Маша": "80г сорбета+80г черники"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "баклажаны",
        "unit": "г",
        "amount": 740
      },
      {
        "product": "брокколи",
        "unit": "г",
        "amount": 2350
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 1785
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1250
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 1765
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 2680
      },
      {
        "product": "квашеная капуста/кимчи",
        "unit": "г",
        "amount": 1390
      },
      {
        "product": "кефир",
        "unit": "г",
        "amount": 3480
      },
      {
        "product": "киви",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "киноа",
        "unit": "г",
        "amount": 635
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1705
      },
      {
        "product": "листовой салат",
        "unit": "г",
        "amount": 1230
      },
      {
        "product": "малина",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "морковь",
        "unit": "г",
        "amount": 470
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 270
      },
      {
        "product": "персики",
        "unit": "г",
        "amount": 800
      },
      {
        "product": "полба",
        "unit": "г",
        "amount": 1595
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 1160
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 1780
      },
      {
        "product": "рыба",
        "unit": "г",
        "amount": 2160
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 760
      },
      {
        "product": "твёрдый сыр",
        "unit": "г",
        "amount": 110
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 1720
      },
      {
        "product": "цветная капуста",
        "unit": "г",
        "amount": 1560
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 1520
      },
      {
        "product": "черника",
        "unit": "г",
        "amount": 1080
      },
      {
        "product": "шпинат",
        "unit": "г",
        "amount": 990
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1540
      },
      {
        "product": "растительное молоко",
        "unit": "мл",
        "amount": 1530
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 23
      }
    ]
  },
  {
    "id": 3,
    "title": "Боулы и запеканки",
    "subtitle": "Более разнообразная неделя с уютными блюдами на два дня",
    "color": "#fce1b6",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23fce1b6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "киноа-боул",
            "dish": {
              "Саша": "киноа-боул: 60г киноа+220мл растительного молока+100г малины+1 яйцо+40г авокадо",
              "Маша": "киноа-боул: 45г киноа+170мл растительного молока+80г малины+1 яйцо+25г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 52,
                "Ккал": 456
              },
              "Маша": {
                "Белки": 25,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "курица терияки-лайт",
            "dish": {
              "Саша": "курица терияки-лайт: 240г курицы+360г риса+220г брокколи+120г квашеной капусты",
              "Маша": "курица терияки-лайт: 175г курицы+260г риса+170г брокколи+100г квашеной капусты"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 620
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 61,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыбная запеканка",
            "dish": {
              "Саша": "рыбная запеканка: 200г рыбы+40г слабосоленой красной рыбы+360г картофеля+220г цукини+100г листового салата",
              "Маша": "рыбная запеканка: 145г рыбы+30г слабосоленой красной рыбы+260г картофеля+170г цукини+80г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 345
              },
              {
                "product": "слабосолёная красная рыба",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 537
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 35,
                "Ккал": 421
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_salmon_avocado_toast.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г груши",
              "Маша": "200г кефира+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г киви",
              "Маша": "80г сорбета+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "зелёный омлет-боул",
            "dish": {
              "Саша": "зелёный омлет-боул: 2 яйца+180г шпината+50г риса+100г черники",
              "Маша": "зелёный омлет-боул: 1 яйцо+140г шпината+40г риса+80г черники"
            },
            "ingredients": [
              {
                "product": "рис",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 47,
                "Ккал": 443
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 334
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "курица терияки-лайт",
            "dish": {
              "Саша": "курица терияки-лайт: 240г курицы+360г риса+220г брокколи+120г квашеной капусты",
              "Маша": "курица терияки-лайт: 175г курицы+260г риса+170г брокколи+100г квашеной капусты"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 620
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 55,
                "Жиры": 9,
                "Углеводы": 89,
                "Ккал": 634
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 8,
                "Углеводы": 58,
                "Ккал": 469
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыбная запеканка",
            "dish": {
              "Саша": "рыбная запеканка: 200г рыбы+40г слабосоленой красной рыбы+360г картофеля+220г цукини+100г листового салата",
              "Маша": "рыбная запеканка: 145г рыбы+30г слабосоленой красной рыбы+260г картофеля+170г цукини+80г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 345
              },
              {
                "product": "слабосолёная красная рыба",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 543
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 12,
                "Углеводы": 37,
                "Ккал": 417
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_salmon_avocado_toast.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г яблока",
              "Маша": "200г кефира+100г персика+80г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г малины+30г зефира",
              "Маша": "120г греческого йогурта+80г малины+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "полбяная каша с сыром",
            "dish": {
              "Саша": "полбяная каша с сыром: 60г полбы+220мл растительного молока+100г груши+1 яйцо+20г твердого сыра",
              "Маша": "полбяная каша с сыром: 45г полбы+170мл растительного молока+80г груши+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 441
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с печёной полбой",
            "dish": {
              "Саша": "индейка с печёной полбой: 240г индейки+300г полбы+200г помидоров+100г листового салата",
              "Маша": "индейка с печёной полбой: 170г индейки+220г полбы+150г помидоров+80г листового салата"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 94,
                "Ккал": 666
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "лодочки из баклажана с говядиной",
            "dish": {
              "Саша": "лодочки из баклажана с говядиной: 230г говядины+260г киноа+220г баклажанов+150г моркови",
              "Маша": "лодочки из баклажана с говядиной: 165г говядины+190г киноа+170г баклажанов+110г моркови"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 260
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 14,
                "Углеводы": 48,
                "Ккал": 533
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 12,
                "Углеводы": 38,
                "Ккал": 431
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г черники",
              "Маша": "200г кефира+100г груши+80г черники"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г киви+30г зефира",
              "Маша": "120г греческого йогурта+80г киви+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет с цукини и киноа",
            "dish": {
              "Саша": "омлет с цукини и киноа: 2 яйца+160г цукини+55г киноа+100г киви",
              "Маша": "омлет с цукини и киноа: 1 яйцо+130г цукини+40г киноа+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 54,
                "Ккал": 477
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 16,
                "Углеводы": 35,
                "Ккал": 354
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "индейка с печёной полбой",
            "dish": {
              "Саша": "индейка с печёной полбой: 240г индейки+300г полбы+200г помидоров+100г листового салата",
              "Маша": "индейка с печёной полбой: 170г индейки+220г полбы+150г помидоров+80г листового салата"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 684
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 60,
                "Ккал": 489
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "лодочки из баклажана с говядиной",
            "dish": {
              "Саша": "лодочки из баклажана с говядиной: 230г говядины+260г киноа+220г баклажанов+150г моркови",
              "Маша": "лодочки из баклажана с говядиной: 165г говядины+190г киноа+170г баклажанов+110г моркови"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 260
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 549
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 447
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г малины",
              "Маша": "200г кефира+100г яблока+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г груши+30г зефира",
              "Маша": "120г греческого йогурта+80г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "рисовая каша с персиком",
            "dish": {
              "Саша": "рисовая каша с персиком: 60г риса+220мл растительного молока+100г персика+1 яйцо",
              "Маша": "рисовая каша с персиком: 45г риса+170мл растительного молока+80г персика+1 яйцо"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 48,
                "Ккал": 448
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 14,
                "Углеводы": 31,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "рыба с вареным картофелем и капустным салатом",
            "dish": {
              "Саша": "рыба с вареным картофелем и капустным салатом: 250г рыбы+380г вареного картофеля+220г квашеной капусты+150г помидоров",
              "Маша": "рыба с вареным картофелем и капустным салатом: 180г рыбы+270г вареного картофеля+170г квашеной капусты+120г помидоров"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 11,
                "Углеводы": 91,
                "Ккал": 662
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 9,
                "Углеводы": 57,
                "Ккал": 466
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "курица с тыквой и шпинатом",
            "dish": {
              "Саша": "курица с тыквой и шпинатом: 220г курицы+280г риса+220г тыквы+200г шпината",
              "Маша": "курица с тыквой и шпинатом: 160г курицы+200г риса+170г тыквы+150г шпината"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 37,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г киви",
              "Маша": "200г кефира+100г груши+80г киви"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "шпинатный омлет с полбой",
            "dish": {
              "Саша": "шпинатный омлет с полбой: 2 яйца+180г шпината+50г полбы+100г черники",
              "Маша": "шпинатный омлет с полбой: 1 яйцо+140г шпината+40г полбы+80г черники"
            },
            "ingredients": [
              {
                "product": "полба",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 466
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 346
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "рыба с вареным картофелем и капустным салатом",
            "dish": {
              "Саша": "рыба с вареным картофелем и капустным салатом: 250г рыбы+380г вареного картофеля+220г квашеной капусты+150г помидоров",
              "Маша": "рыба с вареным картофелем и капустным салатом: 180г рыбы+270г вареного картофеля+170г квашеной капусты+120г помидоров"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 56,
                "Жиры": 10,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 10,
                "Углеводы": 59,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "курица с тыквой и шпинатом",
            "dish": {
              "Саша": "курица с тыквой и шпинатом: 220г курицы+280г риса+220г тыквы+200г шпината",
              "Маша": "курица с тыквой и шпинатом: 160г курицы+200г риса+170г тыквы+150г шпината"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 380
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 547
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 451
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г малины",
              "Маша": "200г кефира+100г персика+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г яблока+30г зефира",
              "Маша": "120г греческого йогурта+80г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "киноа-завтрак с яблоком и сыром",
            "dish": {
              "Саша": "киноа-завтрак с яблоком и сыром: 55г киноа+220мл растительного молока+100г яблока+1 яйцо+20г твердого сыра",
              "Маша": "киноа-завтрак с яблоком и сыром: 40г киноа+170мл растительного молока+80г яблока+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 438
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 321
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с брокколи под томатами",
            "dish": {
              "Саша": "индейка с брокколи под томатами: 230г индейки+360г картофеля+220г брокколи+120г помидоров",
              "Маша": "индейка с брокколи под томатами: 165г индейки+260г картофеля+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 95,
                "Ккал": 672
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 475
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыбный боул с полбой и тыквой",
            "dish": {
              "Саша": "рыбный боул с полбой и тыквой: 240г рыбы+260г полбы+220г тыквы+100г листового салата",
              "Маша": "рыбный боул с полбой и тыквой: 175г рыбы+190г полбы+170г тыквы+80г листового салата"
            },
            "ingredients": [
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 16,
                "Углеводы": 50,
                "Ккал": 550
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г черники",
              "Маша": "200г кефира+100г яблока+80г черники"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "1 тост с 20г джема+150г греческого йогурта+100г киви",
              "Маша": "1 тост с 15г джема+120г греческого йогурта+80г киви"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "джем",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 65
      },
      {
        "product": "баклажаны",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "брокколи",
        "unit": "г",
        "amount": 1170
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 790
      },
      {
        "product": "греческий йогурт",
        "unit": "г",
        "amount": 1890
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1400
      },
      {
        "product": "джем",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "зефир",
        "unit": "г",
        "amount": 300
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 1215
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 3160
      },
      {
        "product": "квашеная капуста/кимчи",
        "unit": "г",
        "amount": 1220
      },
      {
        "product": "кефир",
        "unit": "г",
        "amount": 3500
      },
      {
        "product": "киви",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "киноа",
        "unit": "г",
        "amount": 1195
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1590
      },
      {
        "product": "листовой салат",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "малина",
        "unit": "г",
        "amount": 720
      },
      {
        "product": "морковь",
        "unit": "г",
        "amount": 520
      },
      {
        "product": "персики",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "полба",
        "unit": "г",
        "amount": 1685
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 1460
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 2395
      },
      {
        "product": "рыба",
        "unit": "г",
        "amount": 1965
      },
      {
        "product": "слабосолёная красная рыба",
        "unit": "г",
        "amount": 140
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "твёрдый сыр",
        "unit": "г",
        "amount": 70
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 1170
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 1070
      },
      {
        "product": "черника",
        "unit": "г",
        "amount": 1080
      },
      {
        "product": "шпинат",
        "unit": "г",
        "amount": 1340
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1650
      },
      {
        "product": "растительное молоко",
        "unit": "мл",
        "amount": 1560
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 2
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 17
      }
    ]
  },
  {
    "id": 4,
    "title": "Тёплый овощной план",
    "subtitle": "Рыба, полба, киноа и овощные гарниры без лишней строгости",
    "color": "#d8e2dc",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23d8e2dc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%8E%83%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "полбяная каша с черникой",
            "dish": {
              "Саша": "полбяная каша с черникой: 60г полбы+220мл растительного молока+100г черники+1 яйцо",
              "Маша": "полбяная каша с черникой: 45г полбы+170мл растительного молока+80г черники+1 яйцо"
            },
            "ingredients": [
              {
                "product": "полба",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 52,
                "Ккал": 456
              },
              "Маша": {
                "Белки": 25,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "курица с цветной капустой в духовке",
            "dish": {
              "Саша": "курица с цветной капустой в духовке: 240г курицы+380г картофеля+220г цветной капусты+100г листового салата",
              "Маша": "курица с цветной капустой в духовке: 170г курицы+270г картофеля+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 61,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с фунчозой и овощами",
            "dish": {
              "Саша": "говядина с фунчозой и овощами: 230г говядины+90г фунчозы+220г цукини+120г моркови",
              "Маша": "говядина с фунчозой и овощами: 165г говядины+65г фунчозы+170г цукини+90г моркови"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 537
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 35,
                "Ккал": 421
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г груши",
              "Маша": "200г кефира+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г киви",
              "Маша": "80г сорбета+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "шпинатный омлет с киноа",
            "dish": {
              "Саша": "шпинатный омлет с киноа: 2 яйца+180г шпината+55г киноа+100г киви",
              "Маша": "шпинатный омлет с киноа: 1 яйцо+140г шпината+40г киноа+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 47,
                "Ккал": 443
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 334
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "курица с цветной капустой в духовке",
            "dish": {
              "Саша": "курица с цветной капустой в духовке: 240г курицы+380г картофеля+220г цветной капусты+100г листового салата",
              "Маша": "курица с цветной капустой в духовке: 170г курицы+270г картофеля+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 55,
                "Жиры": 9,
                "Углеводы": 89,
                "Ккал": 634
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 8,
                "Углеводы": 58,
                "Ккал": 469
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с фунчозой и овощами",
            "dish": {
              "Саша": "говядина с фунчозой и овощами: 230г говядины+90г фунчозы+220г цукини+120г моркови",
              "Маша": "говядина с фунчозой и овощами: 165г говядины+65г фунчозы+170г цукини+90г моркови"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 543
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 12,
                "Углеводы": 37,
                "Ккал": 417
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г яблока",
              "Маша": "200г кефира+100г персика+80г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г малины+30г зефира",
              "Маша": "120г греческого йогурта+80г малины+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "рисовый пудинг с малиной и сыром",
            "dish": {
              "Саша": "рисовый пудинг с малиной и сыром: 60г риса+220мл растительного молока+100г малины+1 яйцо+20г твердого сыра",
              "Маша": "рисовый пудинг с малиной и сыром: 45г риса+170мл растительного молока+80г малины+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 441
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "говядина с полбой и капустой",
            "dish": {
              "Саша": "говядина с полбой и капустой: 230г говядины+300г полбы+220г квашеной капусты+150г огурца",
              "Маша": "говядина с полбой и капустой: 165г говядины+220г полбы+170г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 94,
                "Ккал": 666
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыба с киноа и печёным баклажаном",
            "dish": {
              "Саша": "рыба с киноа и печёным баклажаном: 230г рыбы+280г киноа+220г баклажанов+100г листового салата",
              "Маша": "рыба с киноа и печёным баклажаном: 165г рыбы+200г киноа+170г баклажанов+80г листового салата"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 395
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 14,
                "Углеводы": 48,
                "Ккал": 533
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 12,
                "Углеводы": 38,
                "Ккал": 431
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г черники",
              "Маша": "200г кефира+100г груши+80г черники"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "1 тост с 20г джема+150г греческого йогурта+100г киви",
              "Маша": "1 тост с 15г джема+120г греческого йогурта+80г киви"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "джем",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет с цукини и рисом",
            "dish": {
              "Саша": "омлет с цукини и рисом: 2 яйца+160г цукини+55г риса+100г черники",
              "Маша": "омлет с цукини и рисом: 1 яйцо+130г цукини+40г риса+80г черники"
            },
            "ingredients": [
              {
                "product": "рис",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 54,
                "Ккал": 477
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 16,
                "Углеводы": 35,
                "Ккал": 354
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "говядина с полбой и капустой",
            "dish": {
              "Саша": "говядина с полбой и капустой: 230г говядины+300г полбы+220г квашеной капусты+150г огурца",
              "Маша": "говядина с полбой и капустой: 165г говядины+220г полбы+170г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 684
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 60,
                "Ккал": 489
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыба с киноа и печёным баклажаном",
            "dish": {
              "Саша": "рыба с киноа и печёным баклажаном: 230г рыбы+280г киноа+220г баклажанов+100г листового салата",
              "Маша": "рыба с киноа и печёным баклажаном: 165г рыбы+200г киноа+170г баклажанов+80г листового салата"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 395
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 549
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 447
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г малины",
              "Маша": "200г кефира+100г яблока+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г груши+30г зефира",
              "Маша": "120г греческого йогурта+80г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "киноа-каша с персиком",
            "dish": {
              "Саша": "киноа-каша с персиком: 60г киноа+220мл растительного молока+100г персика+1 яйцо+40г авокадо",
              "Маша": "киноа-каша с персиком: 45г киноа+170мл растительного молока+80г персика+1 яйцо+25г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 48,
                "Ккал": 448
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 14,
                "Углеводы": 31,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с рисом и брокколи",
            "dish": {
              "Саша": "индейка с рисом и брокколи: 240г индейки+380г риса+220г брокколи+120г помидоров",
              "Маша": "индейка с рисом и брокколи: 170г индейки+270г риса+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 650
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 11,
                "Углеводы": 91,
                "Ккал": 662
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 9,
                "Углеводы": 57,
                "Ккал": 466
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "курица с тыквой и картофелем",
            "dish": {
              "Саша": "курица с тыквой и картофелем: 230г курицы+280г картофеля+220г тыквы+100г листового салата",
              "Маша": "курица с тыквой и картофелем: 165г курицы+200г картофеля+170г тыквы+80г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 37,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г киви",
              "Маша": "200г кефира+100г груши+80г киви"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет с полбой и грушей",
            "dish": {
              "Саша": "омлет с полбой и грушей: 2 яйца+180г шпината+55г полбы+100г груши",
              "Маша": "омлет с полбой и грушей: 1 яйцо+140г шпината+40г полбы+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 466
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 346
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "индейка с рисом и брокколи",
            "dish": {
              "Саша": "индейка с рисом и брокколи: 240г индейки+380г риса+220г брокколи+120г помидоров",
              "Маша": "индейка с рисом и брокколи: 170г индейки+270г риса+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 650
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 56,
                "Жиры": 10,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 10,
                "Углеводы": 59,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "курица с тыквой и картофелем",
            "dish": {
              "Саша": "курица с тыквой и картофелем: 230г курицы+280г картофеля+220г тыквы+100г листового салата",
              "Маша": "курица с тыквой и картофелем: 165г курицы+200г картофеля+170г тыквы+80г листового салата"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 547
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 451
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г малины",
              "Маша": "200г кефира+100г персика+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г яблока+30г зефира",
              "Маша": "120г греческого йогурта+80г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "рисовая каша с яблоком и сыром",
            "dish": {
              "Саша": "рисовая каша с яблоком и сыром: 60г риса+220мл растительного молока+100г яблока+1 яйцо+20г твердого сыра",
              "Маша": "рисовая каша с яблоком и сыром: 45г риса+170мл растительного молока+80г яблока+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 438
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 321
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "рыба с брокколи и вареным картофелем",
            "dish": {
              "Саша": "рыба с брокколи и вареным картофелем: 250г рыбы+380г вареного картофеля+200г брокколи+120г квашеной капусты",
              "Маша": "рыба с брокколи и вареным картофелем: 180г рыбы+270г вареного картофеля+160г брокколи+100г квашеной капусты"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 360
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 95,
                "Ккал": 672
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 475
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с киноа и баклажаном",
            "dish": {
              "Саша": "говядина с киноа и баклажаном: 230г говядины+280г киноа+220г баклажанов+100г листового салата",
              "Маша": "говядина с киноа и баклажаном: 165г говядины+200г киноа+170г баклажанов+80г листового салата"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 16,
                "Углеводы": 50,
                "Ккал": 550
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г черники",
              "Маша": "200г кефира+100г яблока+80г черники"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г киви+30г зефира",
              "Маша": "120г греческого йогурта+80г киви+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 65
      },
      {
        "product": "баклажаны",
        "unit": "г",
        "amount": 1170
      },
      {
        "product": "брокколи",
        "unit": "г",
        "amount": 1140
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 1975
      },
      {
        "product": "греческий йогурт",
        "unit": "г",
        "amount": 1890
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1400
      },
      {
        "product": "джем",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "зефир",
        "unit": "г",
        "amount": 300
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 820
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 2910
      },
      {
        "product": "квашеная капуста/кимчи",
        "unit": "г",
        "amount": 1000
      },
      {
        "product": "кефир",
        "unit": "г",
        "amount": 3500
      },
      {
        "product": "киви",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "киноа",
        "unit": "г",
        "amount": 1640
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1610
      },
      {
        "product": "листовой салат",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "малина",
        "unit": "г",
        "amount": 720
      },
      {
        "product": "морковь",
        "unit": "г",
        "amount": 420
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 540
      },
      {
        "product": "персики",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "полба",
        "unit": "г",
        "amount": 1240
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 440
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 1605
      },
      {
        "product": "рыба",
        "unit": "г",
        "amount": 1220
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "твёрдый сыр",
        "unit": "г",
        "amount": 70
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "фунчоза",
        "unit": "г",
        "amount": 310
      },
      {
        "product": "цветная капуста",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 1070
      },
      {
        "product": "черника",
        "unit": "г",
        "amount": 1080
      },
      {
        "product": "шпинат",
        "unit": "г",
        "amount": 640
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1650
      },
      {
        "product": "растительное молоко",
        "unit": "мл",
        "amount": 1560
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 2
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 17
      }
    ]
  },
  {
    "id": 5,
    "title": "Домашние котлеты",
    "subtitle": "Простые заготовки, лаваш и лёгкие перекусы по мотивам домашней кухни",
    "color": "#cddafd",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23cddafd%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%8D%BD%EF%B8%8F%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "лаваш 80г+150г куриной грудки+120г помидоров+80г огурца+50г греческого йогурта",
            "dish": {
              "Саша": "лаваш 80г+150г куриной грудки+120г помидоров+80г огурца+50г греческого йогурта",
              "Маша": "лаваш 55г+110г куриной грудки+90г помидоров+60г огурца+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 52,
                "Ккал": 456
              },
              "Маша": {
                "Белки": 25,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "котлеты",
            "dish": {
              "Саша": "котлеты: 140г телятины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+360г картофеля",
              "Маша": "котлеты: 100г телятины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+260г картофеля"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 61,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "курица в лаваше",
            "dish": {
              "Саша": "курица в лаваше: 170г куриной грудки+80г лаваша+40г авокадо+120г огурца+120г помидоров+50г греческого йогурта",
              "Маша": "курица в лаваше: 120г куриной грудки+55г лаваша+25г авокадо+90г огурца+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 537
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 35,
                "Ккал": 421
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+30г зефира",
              "Маша": "170г греческого йогурта+100г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "1 тост с 20г джема+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "1 тост с 15г джема+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "джем",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+140г помидоров+40г лука+60г белого хлеба",
              "Маша": "омлет: 1 яйцо+110г помидоров+30г лука+45г белого хлеба"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 47,
                "Ккал": 443
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 334
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "котлеты",
            "dish": {
              "Саша": "котлеты: 140г телятины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+360г картофеля",
              "Маша": "котлеты: 100г телятины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+260г картофеля"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 55,
                "Жиры": 9,
                "Углеводы": 89,
                "Ккал": 634
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 8,
                "Углеводы": 58,
                "Ккал": 469
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "курица в лаваше",
            "dish": {
              "Саша": "курица в лаваше: 170г куриной грудки+80г лаваша+40г авокадо+120г огурца+120г помидоров+50г греческого йогурта",
              "Маша": "курица в лаваше: 120г куриной грудки+55г лаваша+25г авокадо+90г огурца+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 543
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 12,
                "Углеводы": 37,
                "Ккал": 417
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г груши+30г зефира",
              "Маша": "170г греческого йогурта+100г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "лаваш 80г+160г индейки+120г помидоров+50г греческого йогурта",
            "dish": {
              "Саша": "лаваш 80г+160г индейки+120г помидоров+50г греческого йогурта",
              "Маша": "лаваш 55г+115г индейки+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 275
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 441
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "рожки с фаршем",
            "dish": {
              "Саша": "рожки с фаршем: 140г говядины+130г куриной грудки+35г лука+25г белого хлеба+95г макарон+120г томатного соуса",
              "Маша": "рожки с фаршем: 100г говядины+95г куриной грудки+25г лука+18г белого хлеба+70г макарон+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "макароны/рожки",
                "unit": "г",
                "amount": 165
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 94,
                "Ккал": 666
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "тефтели с рисом",
            "dish": {
              "Саша": "тефтели с рисом: 150г телятины+120г индейки+40г лука+1 яйцо+120г томатного соуса+300г риса",
              "Маша": "тефтели с рисом: 110г телятины+90г индейки+30г лука+1 яйцо+90г томатного соуса+220г риса"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 14,
                "Углеводы": 48,
                "Ккал": 533
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 12,
                "Углеводы": 38,
                "Ккал": 431
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+100г груши",
              "Маша": "170г греческого йогурта+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+100г томатного соуса+60г белого хлеба",
              "Маша": "омлет: 1 яйцо+80г томатного соуса+45г белого хлеба"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 54,
                "Ккал": 477
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 16,
                "Углеводы": 35,
                "Ккал": 354
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "рожки с фаршем",
            "dish": {
              "Саша": "рожки с фаршем: 140г говядины+130г куриной грудки+35г лука+25г белого хлеба+95г макарон+120г томатного соуса",
              "Маша": "рожки с фаршем: 100г говядины+95г куриной грудки+25г лука+18г белого хлеба+70г макарон+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "макароны/рожки",
                "unit": "г",
                "amount": 165
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 684
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 60,
                "Ккал": 489
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "тефтели с рисом",
            "dish": {
              "Саша": "тефтели с рисом: 150г телятины+120г индейки+40г лука+1 яйцо+120г томатного соуса+300г риса",
              "Маша": "тефтели с рисом: 110г телятины+90г индейки+30г лука+1 яйцо+90г томатного соуса+220г риса"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 549
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 447
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г груши+30г зефира",
              "Маша": "170г греческого йогурта+100г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "лаваш 80г+150г куриной грудки+120г огурца+50г греческого йогурта",
            "dish": {
              "Саша": "лаваш 80г+150г куриной грудки+120г огурца+50г греческого йогурта",
              "Маша": "лаваш 55г+110г куриной грудки+90г огурца+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 48,
                "Ккал": 448
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 14,
                "Углеводы": 31,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "мясной соус с фунчозой и овощами",
            "dish": {
              "Саша": "мясной соус с фунчозой и овощами: 140г говядины+140г индейки+80г фунчозы+40г лука+120г томатного соуса+150г цукини",
              "Маша": "мясной соус с фунчозой и овощами: 100г говядины+100г индейки+60г фунчозы+30г лука+90г томатного соуса+110г цукини"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 260
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 11,
                "Углеводы": 91,
                "Ккал": 662
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 9,
                "Углеводы": 57,
                "Ккал": 466
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "котлеты с тыквой",
            "dish": {
              "Саша": "котлеты с тыквой: 140г телятины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+250г тыквы",
              "Маша": "котлеты с тыквой: 100г телятины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+180г тыквы"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 37,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+30г зефира",
              "Маша": "170г греческого йогурта+100г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+140г помидоров+40г лука+60г белого хлеба",
              "Маша": "омлет: 1 яйцо+110г помидоров+30г лука+45г белого хлеба"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 466
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 346
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "мясной соус с фунчозой и овощами",
            "dish": {
              "Саша": "мясной соус с фунчозой и овощами: 140г говядины+140г индейки+80г фунчозы+40г лука+120г томатного соуса+150г цукини",
              "Маша": "мясной соус с фунчозой и овощами: 100г говядины+100г индейки+60г фунчозы+30г лука+90г томатного соуса+110г цукини"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 260
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 56,
                "Жиры": 10,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 10,
                "Углеводы": 59,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "котлеты с тыквой",
            "dish": {
              "Саша": "котлеты с тыквой: 140г телятины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+250г тыквы",
              "Маша": "котлеты с тыквой: 100г телятины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+180г тыквы"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 430
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 547
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 451
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+100г груши",
              "Маша": "170г греческого йогурта+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "тост с авокадо и красной рыбой",
            "dish": {
              "Саша": "тост с авокадо и красной рыбой: 1 тост+40г авокадо+40г слабосоленой красной рыбы+160г индейки+120г помидоров+50г греческого йогурта",
              "Маша": "тост с авокадо и красной рыбой: 1 тост+25г авокадо+30г слабосоленой красной рыбы+115г индейки+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 275
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "слабосолёная красная рыба",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 438
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 321
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "котлеты",
            "dish": {
              "Саша": "котлеты: 150г телятины+120г куриной грудки+40г лука+30г белого хлеба+1 яйцо+300г картофеля+120г томатного соуса",
              "Маша": "котлеты: 110г телятины+90г куриной грудки+30г лука+22г белого хлеба+1 яйцо+220г картофеля+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 52
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 95,
                "Ккал": 672
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 475
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "лаваш с фаршем",
            "dish": {
              "Саша": "лаваш с фаршем: 140г говядины+120г индейки+80г лаваша+120г помидоров+60г греческого йогурта",
              "Маша": "лаваш с фаршем: 100г говядины+90г индейки+55г лаваша+90г помидоров+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 16,
                "Углеводы": 50,
                "Ккал": 550
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г груши+30г зефира",
              "Маша": "170г греческого йогурта+100г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 195
      },
      {
        "product": "белый хлеб",
        "unit": "г",
        "amount": 625
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 1200
      },
      {
        "product": "греческий йогурт",
        "unit": "г",
        "amount": 4320
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1470
      },
      {
        "product": "джем",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "зефир",
        "unit": "г",
        "amount": 250
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 1660
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 1760
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 2660
      },
      {
        "product": "лаваш",
        "unit": "г",
        "amount": 2040
      },
      {
        "product": "лук",
        "unit": "г",
        "amount": 850
      },
      {
        "product": "макароны/рожки",
        "unit": "г",
        "amount": 330
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 1750
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 3230
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "слабосолёная красная рыба",
        "unit": "г",
        "amount": 70
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "телятина",
        "unit": "г",
        "amount": 1740
      },
      {
        "product": "томатный соус/паста",
        "unit": "г",
        "amount": 1650
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 860
      },
      {
        "product": "фунчоза",
        "unit": "г",
        "amount": 280
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 520
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1900
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 4
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 23
      }
    ]
  },
  {
    "id": 6,
    "title": "Лаваш и тефтели",
    "subtitle": "Практичная неделя с тефтелями, гарнирами и быстрыми сборками",
    "color": "#fde2e4",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23fde2e4%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%8C%AF%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+120г помидоров+50г белого хлеба+40г лука",
              "Маша": "омлет: 1 яйцо+90г помидоров+40г белого хлеба+30г лука"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 52,
                "Ккал": 456
              },
              "Маша": {
                "Белки": 25,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "тефтели с рисом",
            "dish": {
              "Саша": "тефтели с рисом: 150г говядины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+300г риса+120г томатного соуса",
              "Маша": "тефтели с рисом: 110г говядины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+220г риса+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 61,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "лаваш с индейкой и авокадо",
            "dish": {
              "Саша": "лаваш с индейкой и авокадо: 170г индейки+80г лаваша+40г авокадо+120г огурца+50г греческого йогурта",
              "Маша": "лаваш с индейкой и авокадо: 120г индейки+55г лаваша+25г авокадо+90г огурца+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 537
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 35,
                "Ккал": 421
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+30г зефира",
              "Маша": "170г греческого йогурта+100г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "лаваш 80г+150г куриной грудки+120г помидоров+50г греческого йогурта",
            "dish": {
              "Саша": "лаваш 80г+150г куриной грудки+120г помидоров+50г греческого йогурта",
              "Маша": "лаваш 55г+110г куриной грудки+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 47,
                "Ккал": 443
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 334
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "тефтели с рисом",
            "dish": {
              "Саша": "тефтели с рисом: 150г говядины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+300г риса+120г томатного соуса",
              "Маша": "тефтели с рисом: 110г говядины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+220г риса+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 55,
                "Жиры": 9,
                "Углеводы": 89,
                "Ккал": 634
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 8,
                "Углеводы": 58,
                "Ккал": 469
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "лаваш с индейкой и авокадо",
            "dish": {
              "Саша": "лаваш с индейкой и авокадо: 170г индейки+80г лаваша+40г авокадо+120г огурца+50г греческого йогурта",
              "Маша": "лаваш с индейкой и авокадо: 120г индейки+55г лаваша+25г авокадо+90г огурца+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 543
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 12,
                "Углеводы": 37,
                "Ккал": 417
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г груши+30г зефира",
              "Маша": "170г греческого йогурта+100г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+100г томатного соуса+60г белого хлеба",
              "Маша": "омлет: 1 яйцо+80г томатного соуса+45г белого хлеба"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 441
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 326
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "фунчоза с овощами и курицей",
            "dish": {
              "Саша": "фунчоза с овощами и курицей: 140г телятины+140г куриной грудки+90г фунчозы+40г лука+150г цукини+120г томатного соуса",
              "Маша": "фунчоза с овощами и курицей: 100г телятины+100г куриной грудки+65г фунчозы+30г лука+110г цукини+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 260
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 94,
                "Ккал": 666
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "котлеты с картофелем",
            "dish": {
              "Саша": "котлеты с картофелем: 130г говядины+130г индейки+35г лука+1 яйцо+360г картофеля",
              "Маша": "котлеты с картофелем: 95г говядины+95г индейки+25г лука+1 яйцо+260г картофеля"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 14,
                "Углеводы": 48,
                "Ккал": 533
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 12,
                "Углеводы": 38,
                "Ккал": 431
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+100г груши",
              "Маша": "170г греческого йогурта+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "лаваш 80г+160г индейки+120г помидоров+50г греческого йогурта",
            "dish": {
              "Саша": "лаваш 80г+160г индейки+120г помидоров+50г греческого йогурта",
              "Маша": "лаваш 55г+115г индейки+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 275
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 18,
                "Углеводы": 54,
                "Ккал": 477
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 16,
                "Углеводы": 35,
                "Ккал": 354
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "фунчоза с овощами и курицей",
            "dish": {
              "Саша": "фунчоза с овощами и курицей: 140г телятины+140г куриной грудки+90г фунчозы+40г лука+150г цукини+120г томатного соуса",
              "Маша": "фунчоза с овощами и курицей: 100г телятины+100г куриной грудки+65г фунчозы+30г лука+110г цукини+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 260
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 684
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 8,
                "Углеводы": 60,
                "Ккал": 489
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "котлеты с картофелем",
            "dish": {
              "Саша": "котлеты с картофелем: 130г говядины+130г индейки+35г лука+1 яйцо+360г картофеля",
              "Маша": "котлеты с картофелем: 95г говядины+95г индейки+25г лука+1 яйцо+260г картофеля"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 549
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 447
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г груши+30г зефира",
              "Маша": "170г греческого йогурта+100г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+140г помидоров+40г лука+60г белого хлеба",
              "Маша": "омлет: 1 яйцо+110г помидоров+30г лука+45г белого хлеба"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 35,
                "Жиры": 18,
                "Углеводы": 48,
                "Ккал": 448
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 14,
                "Углеводы": 31,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "котлеты с гречкой",
            "dish": {
              "Саша": "котлеты с гречкой: 150г говядины+120г индейки+40г лука+30г белого хлеба+1 яйцо+300г гречки+120г томатной пасты",
              "Маша": "котлеты с гречкой: 110г говядины+90г индейки+30г лука+22г белого хлеба+1 яйцо+220г гречки+90г томатной пасты"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 52
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 58,
                "Жиры": 11,
                "Углеводы": 91,
                "Ккал": 662
              },
              "Маша": {
                "Белки": 43,
                "Жиры": 9,
                "Углеводы": 57,
                "Ккал": 466
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "лаваш с курицей",
            "dish": {
              "Саша": "лаваш с курицей: 170г куриной грудки+80г лаваша+120г огурца+50г греческого йогурта",
              "Маша": "лаваш с курицей: 120г куриной грудки+55г лаваша+90г огурца+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 50,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 37,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+30г зефира",
              "Маша": "170г греческого йогурта+100г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "лаваш 80г+150г индейки+120г помидоров+50г греческого йогурта",
            "dish": {
              "Саша": "лаваш 80г+150г индейки+120г помидоров+50г греческого йогурта",
              "Маша": "лаваш 55г+110г индейки+90г помидоров+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 38,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 466
              },
              "Маша": {
                "Белки": 26,
                "Жиры": 15,
                "Углеводы": 33,
                "Ккал": 346
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "котлеты с гречкой",
            "dish": {
              "Саша": "котлеты с гречкой: 150г говядины+120г индейки+40г лука+30г белого хлеба+1 яйцо+300г гречки+120г томатной пасты",
              "Маша": "котлеты с гречкой: 110г говядины+90г индейки+30г лука+22г белого хлеба+1 яйцо+220г гречки+90г томатной пасты"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 52
              },
              {
                "product": "говядина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 56,
                "Жиры": 10,
                "Углеводы": 92,
                "Ккал": 657
              },
              "Маша": {
                "Белки": 42,
                "Жиры": 10,
                "Углеводы": 59,
                "Ккал": 483
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "лаваш с курицей",
            "dish": {
              "Саша": "лаваш с курицей: 170г куриной грудки+80г лаваша+120г огурца+50г греческого йогурта",
              "Маша": "лаваш с курицей: 120г куриной грудки+55г лаваша+90г огурца+40г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 290
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 547
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 451
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г яблока+100г груши",
              "Маша": "170г греческого йогурта+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "1 тост с 20г джема+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "1 тост с 15г джема+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "джем",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет",
            "dish": {
              "Саша": "омлет: 2 яйца+120г помидоров+50г белого хлеба+40г лука",
              "Маша": "омлет: 1 яйцо+90г помидоров+40г белого хлеба+30г лука"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 33,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 438
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 15,
                "Углеводы": 32,
                "Ккал": 321
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "котлеты с вареным картофелем",
            "dish": {
              "Саша": "котлеты с вареным картофелем: 150г телятины+130г куриной грудки+35г лука+25г белого хлеба+1 яйцо+300г вареного картофеля+120г томатного соуса",
              "Маша": "котлеты с вареным картофелем: 110г телятины+95г куриной грудки+25г лука+18г белого хлеба+1 яйцо+220г вареного картофеля+90г томатного соуса"
            },
            "ingredients": [
              {
                "product": "белый хлеб",
                "unit": "г",
                "amount": 43
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 225
              },
              {
                "product": "лук",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "телятина",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "томатный соус/паста",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 60,
                "Жиры": 9,
                "Углеводы": 95,
                "Ккал": 672
              },
              "Маша": {
                "Белки": 44,
                "Жиры": 7,
                "Углеводы": 60,
                "Ккал": 475
              }
            },
            "photo": "https://source.unsplash.com/900x650/?omelette%20vegetables",
            "photoQuery": "omelette vegetables",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "лаваш с фаршем",
            "dish": {
              "Саша": "лаваш с фаршем: 140г говядины+120г индейки+80г лаваша+120г помидоров+60г греческого йогурта",
              "Маша": "лаваш с фаршем: 100г говядины+90г индейки+55г лаваша+90г помидоров+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 240
              },
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 135
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 53,
                "Жиры": 16,
                "Углеводы": 50,
                "Ккал": 550
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 424
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_lavash_wrap.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "250г греческого йогурта+150г груши+30г зефира",
              "Маша": "170г греческого йогурта+100г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 420
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 45,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 4,
                "Углеводы": 32,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "120г лаваша+120г помидоров+80г огурца+60г греческого йогурта",
              "Маша": "85г лаваша+90г помидоров+60г огурца+45г греческого йогурта"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "лаваш",
                "unit": "г",
                "amount": 205
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 140
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 210
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 12,
                "Жиры": 3,
                "Углеводы": 32,
                "Ккал": 210
              },
              "Маша": {
                "Белки": 9,
                "Жиры": 2,
                "Углеводы": 24,
                "Ккал": 160
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 4,
                "Жиры": 1,
                "Углеводы": 25,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 3,
                "Жиры": 1,
                "Углеводы": 18,
                "Ккал": 90
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 130
      },
      {
        "product": "белый хлеб",
        "unit": "г",
        "amount": 623
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 1730
      },
      {
        "product": "греческий йогурт",
        "unit": "г",
        "amount": 4410
      },
      {
        "product": "гречка",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1470
      },
      {
        "product": "джем",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "зефир",
        "unit": "г",
        "amount": 250
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 2195
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 1760
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1995
      },
      {
        "product": "лаваш",
        "unit": "г",
        "amount": 2310
      },
      {
        "product": "лук",
        "unit": "г",
        "amount": 790
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 1820
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 2980
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "телятина",
        "unit": "г",
        "amount": 740
      },
      {
        "product": "томатный соус/паста",
        "unit": "г",
        "amount": 1650
      },
      {
        "product": "фунчоза",
        "unit": "г",
        "amount": 310
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 520
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1900
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 2
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 26
      }
    ]
  },
  {
    "id": 7,
    "title": "Новая неделя без суеты",
    "subtitle": "Другие сочетания рыбы, индейки, круп и лёгких перекусов",
    "color": "#e2f0cb",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23e2f0cb%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%8D%90%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "овсяно-рисовая каша",
            "dish": {
              "Саша": "овсяно-рисовая каша: 45г овсянки+35г риса+220мл растительного молока+100г черники+1 яйцо+40г авокадо",
              "Маша": "овсяно-рисовая каша: 35г овсянки+25г риса+170мл растительного молока+80г черники+1 яйцо+25г авокадо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "овсянка",
                "unit": "г",
                "amount": 80
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 60
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 16,
                "Углеводы": 54,
                "Ккал": 450
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "куриные биточки с картофелем",
            "dish": {
              "Саша": "куриные биточки с картофелем: 240г курицы+380г картофеля+220г брокколи+120г помидоров",
              "Маша": "куриные биточки с картофелем: 170г курицы+270г картофеля+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 8,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 7,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "рыба с киноа и цветной капустой",
            "dish": {
              "Саша": "рыба с киноа и цветной капустой: 240г рыбы+260г киноа+220г цветной капусты+100г листового салата",
              "Маша": "рыба с киноа и цветной капустой: 175г рыбы+190г киноа+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 54,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 38,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г груши",
              "Маша": "200г кефира+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г малины+30г зефира",
              "Маша": "120г греческого йогурта+80г малины+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 5,
                "Углеводы": 34,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 17,
                "Жиры": 5,
                "Углеводы": 24,
                "Ккал": 220
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г киви",
              "Маша": "80г сорбета+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 110
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет с брокколи",
            "dish": {
              "Саша": "омлет с брокколи: 2 яйца+180г брокколи+50г киноа+100г малины",
              "Маша": "омлет с брокколи: 1 яйцо+140г брокколи+50г киноа+80г малины"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 100
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 17,
                "Углеводы": 48,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 34,
                "Ккал": 320
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "куриные биточки с картофелем",
            "dish": {
              "Саша": "куриные биточки с картофелем: 240г курицы+380г картофеля+220г брокколи+120г помидоров",
              "Маша": "куриные биточки с картофелем: 170г курицы+270г картофеля+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 630
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 7,
                "Углеводы": 62,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?chicken%20healthy%20meal",
            "photoQuery": "chicken healthy meal",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Ужин",
            "title": "рыба с киноа и цветной капустой",
            "dish": {
              "Саша": "рыба с киноа и цветной капустой: 240г рыбы+260г киноа+220г цветной капусты+100г листового салата",
              "Маша": "рыба с киноа и цветной капустой: 175г рыбы+190г киноа+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 49,
                "Жиры": 14,
                "Углеводы": 56,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 10,
                "Углеводы": 40,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г яблока",
              "Маша": "200г кефира+100г персика+80г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 40,
                "Ккал": 270
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "1 тост с 20г джема+150г греческого йогурта+100г черники",
              "Маша": "1 тост с 15г джема+120г греческого йогурта+80г черники"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "джем",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 4,
                "Углеводы": 38,
                "Ккал": 250
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 4,
                "Углеводы": 25,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 9,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "полба с грушей",
            "dish": {
              "Саша": "полба с грушей: 60г полбы+220мл растительного молока+100г груши+1 яйцо",
              "Маша": "полба с грушей: 45г полбы+170мл растительного молока+80г груши+1 яйцо"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с фунчозой и овощами",
            "dish": {
              "Саша": "индейка с фунчозой и овощами: 240г индейки+90г фунчозы+200г цукини+150г моркови",
              "Маша": "индейка с фунчозой и овощами: 170г индейки+65г фунчозы+150г цукини+110г моркови"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 8,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 6,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с тыквой и гречкой",
            "dish": {
              "Саша": "говядина с тыквой и гречкой: 230г говядины+260г гречки+240г тыквы+120г помидоров",
              "Маша": "говядина с тыквой и гречкой: 165г говядины+190г гречки+240г тыквы+100г помидоров"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 480
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 13,
                "Углеводы": 50,
                "Ккал": 520
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 10,
                "Углеводы": 42,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г черники",
              "Маша": "200г кефира+100г груши+80г черники"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г киви+30г зефира",
              "Маша": "120г греческого йогурта+80г киви+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 5,
                "Углеводы": 36,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "киноа с яблоком и сыром",
            "dish": {
              "Саша": "киноа с яблоком и сыром: 55г киноа+220мл растительного молока+100г яблока+1 яйцо+20г твердого сыра",
              "Маша": "киноа с яблоком и сыром: 40г киноа+170мл растительного молока+80г яблока+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 16,
                "Углеводы": 56,
                "Ккал": 460
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 340
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с фунчозой и овощами",
            "dish": {
              "Саша": "индейка с фунчозой и овощами: 240г индейки+90г фунчозы+200г цукини+150г моркови",
              "Маша": "индейка с фунчозой и овощами: 170г индейки+65г фунчозы+150г цукини+110г моркови"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 260
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 9,
                "Углеводы": 98,
                "Ккал": 660
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 7,
                "Углеводы": 66,
                "Ккал": 470
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с тыквой и гречкой",
            "dish": {
              "Саша": "говядина с тыквой и гречкой: 230г говядины+260г гречки+240г тыквы+120г помидоров",
              "Маша": "говядина с тыквой и гречкой: 165г говядины+190г гречки+240г тыквы+100г помидоров"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "гречка",
                "unit": "г",
                "amount": 450
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 480
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 46,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 11,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г малины",
              "Маша": "200г кефира+100г яблока+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г груши+30г зефира",
              "Маша": "120г греческого йогурта+80г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 5,
                "Углеводы": 34,
                "Ккал": 270
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "рисовая каша с киви",
            "dish": {
              "Саша": "рисовая каша с киви: 60г риса+220мл растительного молока+100г киви+1 яйцо",
              "Маша": "рисовая каша с киви: 45г риса+170мл растительного молока+80г киви+1 яйцо"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 34,
                "Ккал": 300
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "рыба с вареным картофелем и салатом",
            "dish": {
              "Саша": "рыба с вареным картофелем и салатом: 250г рыбы+400г вареного картофеля+180г квашеной капусты+150г огурца",
              "Маша": "рыба с вареным картофелем и салатом: 180г рыбы+280г вареного картофеля+140г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 680
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 8,
                "Углеводы": 62,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "курица с полбой и баклажаном",
            "dish": {
              "Саша": "курица с полбой и баклажаном: 230г курицы+300г полбы+220г баклажанов+120г помидоров",
              "Маша": "курица с полбой и баклажаном: 165г курицы+220г полбы+170г баклажанов+100г помидоров"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 40,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г киви",
              "Маша": "200г кефира+100г груши+80г киви"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 38,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 5,
                "Углеводы": 26,
                "Ккал": 190
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 4,
                "Углеводы": 38,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 4,
                "Углеводы": 25,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 19,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет со шпинатом и рисом",
            "dish": {
              "Саша": "омлет со шпинатом и рисом: 2 яйца+180г шпината+50г риса+100г черники",
              "Маша": "омлет со шпинатом и рисом: 1 яйцо+140г шпината+40г риса+80г черники"
            },
            "ingredients": [
              {
                "product": "рис",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 460
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 330
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "рыба с вареным картофелем и салатом",
            "dish": {
              "Саша": "рыба с вареным картофелем и салатом: 250г рыбы+400г вареного картофеля+180г квашеной капусты+150г огурца",
              "Маша": "рыба с вареным картофелем и салатом: 180г рыбы+280г вареного картофеля+140г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "картофель",
                "unit": "г",
                "amount": 680
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 9,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 8,
                "Углеводы": 64,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "курица с полбой и баклажаном",
            "dish": {
              "Саша": "курица с полбой и баклажаном: 230г курицы+300г полбы+220г баклажанов+120г помидоров",
              "Маша": "курица с полбой и баклажаном: 165г курицы+220г полбы+170г баклажанов+100г помидоров"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 54,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 11,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г малины",
              "Маша": "200г кефира+100г персика+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 15,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г яблока+30г зефира",
              "Маша": "120г греческого йогурта+80г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 4,
                "Углеводы": 34,
                "Ккал": 250
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 110
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "полбяная каша с персиком",
            "dish": {
              "Саша": "полбяная каша с персиком: 60г полбы+220мл растительного молока+100г персика+1 яйцо",
              "Маша": "полбяная каша с персиком: 45г полбы+170мл растительного молока+80г персика+1 яйцо"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с киноа и брокколи",
            "dish": {
              "Саша": "индейка с киноа и брокколи: 240г индейки+280г киноа+220г брокколи+120г помидоров",
              "Маша": "индейка с киноа и брокколи: 170г индейки+200г киноа+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 8,
                "Углеводы": 98,
                "Ккал": 660
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 6,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыбный боул",
            "dish": {
              "Саша": "рыбный боул: 200г рыбы+40г слабосоленой красной рыбы+300г риса+220г тыквы+100г листового салата",
              "Маша": "рыбный боул: 145г рыбы+30г слабосоленой красной рыбы+220г риса+170г тыквы+80г листового салата"
            },
            "ingredients": [
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 345
              },
              {
                "product": "слабосолёная красная рыба",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 40,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_salmon_avocado_toast.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г черники",
              "Маша": "200г кефира+100г яблока+80г черники"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 40,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 27,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г киви+30г зефира",
              "Маша": "120г греческого йогурта+80г киви+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 5,
                "Углеводы": 37,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 65
      },
      {
        "product": "баклажаны",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "брокколи",
        "unit": "г",
        "amount": 1490
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 790
      },
      {
        "product": "греческий йогурт",
        "unit": "г",
        "amount": 1890
      },
      {
        "product": "гречка",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1400
      },
      {
        "product": "джем",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "зефир",
        "unit": "г",
        "amount": 300
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 1230
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 2660
      },
      {
        "product": "квашеная капуста/кимчи",
        "unit": "г",
        "amount": 640
      },
      {
        "product": "кефир",
        "unit": "г",
        "amount": 3500
      },
      {
        "product": "киви",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "киноа",
        "unit": "г",
        "amount": 1575
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1610
      },
      {
        "product": "листовой салат",
        "unit": "г",
        "amount": 540
      },
      {
        "product": "малина",
        "unit": "г",
        "amount": 720
      },
      {
        "product": "морковь",
        "unit": "г",
        "amount": 520
      },
      {
        "product": "овсянка",
        "unit": "г",
        "amount": 80
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 540
      },
      {
        "product": "персики",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "полба",
        "unit": "г",
        "amount": 1250
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 1540
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 775
      },
      {
        "product": "рыба",
        "unit": "г",
        "amount": 2035
      },
      {
        "product": "слабосолёная красная рыба",
        "unit": "г",
        "amount": 70
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "твёрдый сыр",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 1350
      },
      {
        "product": "фунчоза",
        "unit": "г",
        "amount": 310
      },
      {
        "product": "цветная капуста",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 700
      },
      {
        "product": "черника",
        "unit": "г",
        "amount": 1080
      },
      {
        "product": "шпинат",
        "unit": "г",
        "amount": 320
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1650
      },
      {
        "product": "растительное молоко",
        "unit": "мл",
        "amount": 1950
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 2
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 16
      }
    ]
  },
  {
    "id": 8,
    "title": "Фунчоза и красная рыба",
    "subtitle": "Неделя с фунчозой, варёным картофелем, авокадо и красной рыбой",
    "color": "#d7e3fc",
    "hero": "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20720%20420%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%3Cstop%20stop-color%3D%22%23d7e3fc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff7ec%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%22720%22%20height%3D%22420%22%20rx%3D%2242%22%20fill%3D%22url%28%23g%29%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22610%22%20cy%3D%2282%22%20r%3D%2292%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.45%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%2296%22%20cy%3D%22338%22%20r%3D%22120%22%20fill%3D%22%23ffffff%22%20opacity%3D%22.38%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22455%22%20y%3D%22285%22%20font-size%3D%22142%22%3E%F0%9F%8D%9C%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2292%22%20y%3D%22315%22%20font-size%3D%2278%22%3E%F0%9F%8D%B3%3C%2Ftext%3E%3Ctext%20x%3D%22176%22%20y%3D%22342%22%20font-size%3D%2262%22%3E%F0%9F%A5%97%3C%2Ftext%3E%3Ctext%20x%3D%22248%22%20y%3D%22314%22%20font-size%3D%2258%22%3E%E2%9C%A8%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
    "days": [
      {
        "id": "ПН",
        "name": "Понедельник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "киноа с черникой",
            "dish": {
              "Саша": "киноа с черникой: 60г киноа+220мл растительного молока+100г черники+1 яйцо",
              "Маша": "киноа с черникой: 45г киноа+170мл растительного молока+80г черники+1 яйцо"
            },
            "ingredients": [
              {
                "product": "киноа",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 16,
                "Углеводы": 54,
                "Ккал": 450
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "индейка с картофелем и цветной капустой",
            "dish": {
              "Саша": "индейка с картофелем и цветной капустой: 240г индейки+380г картофеля+220г цветной капусты+100г листового салата",
              "Маша": "индейка с картофелем и цветной капустой: 170г индейки+270г картофеля+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 8,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 7,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с фунчозой и овощами",
            "dish": {
              "Саша": "говядина с фунчозой и овощами: 230г говядины+90г фунчозы+200г цукини+120г моркови",
              "Маша": "говядина с фунчозой и овощами: 165г говядины+65г фунчозы+150г цукини+90г моркови"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 54,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 38,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г груши",
              "Маша": "200г кефира+100г яблока+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г малины+30г зефира",
              "Маша": "120г греческого йогурта+80г малины+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 5,
                "Углеводы": 34,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 17,
                "Жиры": 5,
                "Углеводы": 24,
                "Ккал": 220
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г киви",
              "Маша": "80г сорбета+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 110
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВТ",
        "name": "Вторник",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет с помидорами и полбой",
            "dish": {
              "Саша": "омлет с помидорами и полбой: 2 яйца+160г помидоров+50г полбы+100г малины",
              "Маша": "омлет с помидорами и полбой: 1 яйцо+120г помидоров+40г полбы+80г малины"
            },
            "ingredients": [
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 90
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 280
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 17,
                "Углеводы": 48,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 34,
                "Ккал": 320
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "индейка с картофелем и цветной капустой",
            "dish": {
              "Саша": "индейка с картофелем и цветной капустой: 240г индейки+380г картофеля+220г цветной капусты+100г листового салата",
              "Маша": "индейка с картофелем и цветной капустой: 170г индейки+270г картофеля+170г цветной капусты+80г листового салата"
            },
            "ingredients": [
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 9,
                "Углеводы": 92,
                "Ккал": 630
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 7,
                "Углеводы": 62,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "говядина с фунчозой и овощами",
            "dish": {
              "Саша": "говядина с фунчозой и овощами: 230г говядины+90г фунчозы+200г цукини+120г моркови",
              "Маша": "говядина с фунчозой и овощами: 165г говядины+65г фунчозы+150г цукини+90г моркови"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "морковь",
                "unit": "г",
                "amount": 210
              },
              {
                "product": "фунчоза",
                "unit": "г",
                "amount": 155
              },
              {
                "product": "цукини/кабачки",
                "unit": "г",
                "amount": 350
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 49,
                "Жиры": 14,
                "Углеводы": 56,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 10,
                "Углеводы": 40,
                "Ккал": 400
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_funchoza_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г яблока",
              "Маша": "200г кефира+100г персика+80г яблока"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 40,
                "Ккал": 270
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 4,
                "Углеводы": 38,
                "Ккал": 250
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 4,
                "Углеводы": 25,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 9,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СР",
        "name": "Среда",
        "meals": [
          {
            "id": "Завтрак",
            "title": "рисовая каша с грушей",
            "dish": {
              "Саша": "рисовая каша с грушей: 60г риса+220мл растительного молока+100г груши+1 яйцо",
              "Маша": "рисовая каша с грушей: 45г риса+170мл растительного молока+80г груши+1 яйцо"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 15,
                "Углеводы": 52,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "курица с киноа и брокколи",
            "dish": {
              "Саша": "курица с киноа и брокколи: 240г курицы+280г киноа+220г брокколи+120г помидоров",
              "Маша": "курица с киноа и брокколи: 170г курицы+200г киноа+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 8,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 6,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыбные котлеты с гречкой",
            "dish": {
              "Саша": "рыбные котлеты с гречкой: 240г рыбы+280г гречки+220г тыквы+100г листового салата",
              "Маша": "рыбные котлеты с гречкой: 175г рыбы+200г гречки+170г тыквы+80г листового салата"
            },
            "ingredients": [
              {
                "product": "гречка",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 13,
                "Углеводы": 50,
                "Ккал": 520
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 10,
                "Углеводы": 42,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г черники",
              "Маша": "200г кефира+100г груши+80г черники"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "1 тост с 20г джема+150г греческого йогурта+100г киви",
              "Маша": "1 тост с 15г джема+120г греческого йогурта+80г киви"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "джем",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 5,
                "Углеводы": 36,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20wrap%20toast",
            "photoQuery": "healthy wrap toast",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ЧТ",
        "name": "Четверг",
        "meals": [
          {
            "id": "Завтрак",
            "title": "омлет со шпинатом и киноа",
            "dish": {
              "Саша": "омлет со шпинатом и киноа: 2 яйца+180г шпината+55г киноа+100г киви",
              "Маша": "омлет со шпинатом и киноа: 1 яйцо+140г шпината+40г киноа+80г киви"
            },
            "ingredients": [
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 95
              },
              {
                "product": "шпинат",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 3
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 16,
                "Углеводы": 56,
                "Ккал": 460
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 38,
                "Ккал": 340
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_omelet_vegetables.png"
          },
          {
            "id": "Обед",
            "title": "курица с киноа и брокколи",
            "dish": {
              "Саша": "курица с киноа и брокколи: 240г курицы+280г киноа+220г брокколи+120г помидоров",
              "Маша": "курица с киноа и брокколи: 170г курицы+200г киноа+170г брокколи+100г помидоров"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 9,
                "Углеводы": 98,
                "Ккал": 660
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 7,
                "Углеводы": 66,
                "Ккал": 470
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыбные котлеты с гречкой",
            "dish": {
              "Саша": "рыбные котлеты с гречкой: 240г рыбы+280г гречки+220г тыквы+100г листового салата",
              "Маша": "рыбные котлеты с гречкой: 175г рыбы+200г гречки+170г тыквы+80г листового салата"
            },
            "ingredients": [
              {
                "product": "гречка",
                "unit": "г",
                "amount": 480
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 415
              },
              {
                "product": "тыква",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 46,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 11,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_meatballs_cutlets.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г малины",
              "Маша": "200г кефира+100г яблока+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г груши+30г зефира",
              "Маша": "120г греческого йогурта+80г груши+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 5,
                "Углеводы": 34,
                "Ккал": 270
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 130
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ПТ",
        "name": "Пятница",
        "meals": [
          {
            "id": "Завтрак",
            "title": "полба с яблоком и сыром",
            "dish": {
              "Саша": "полба с яблоком и сыром: 60г полбы+220мл растительного молока+100г яблока+1 яйцо+20г твердого сыра",
              "Маша": "полба с яблоком и сыром: 45г полбы+170мл растительного молока+80г яблока+1 яйцо+15г твердого сыра"
            },
            "ingredients": [
              {
                "product": "полба",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "твёрдый сыр",
                "unit": "г",
                "amount": 35
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 32,
                "Жиры": 17,
                "Углеводы": 50,
                "Ккал": 440
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 34,
                "Ккал": 300
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "говядина с вареным картофелем и салатом",
            "dish": {
              "Саша": "говядина с вареным картофелем и салатом: 230г говядины+380г вареного картофеля+180г квашеной капусты+150г огурца",
              "Маша": "говядина с вареным картофелем и салатом: 165г говядины+270г вареного картофеля+140г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 52,
                "Жиры": 10,
                "Углеводы": 94,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 39,
                "Жиры": 8,
                "Углеводы": 62,
                "Ккал": 450
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "индейка с рисом и баклажанами",
            "dish": {
              "Саша": "индейка с рисом и баклажанами: 240г индейки+320г риса+220г баклажанов+120г помидоров",
              "Маша": "индейка с рисом и баклажанами: 170г индейки+230г риса+170г баклажанов+100г помидоров"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 550
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 530
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 40,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г груши+100г киви",
              "Маша": "200г кефира+100г груши+80г киви"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 250
              },
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 14,
                "Жиры": 6,
                "Углеводы": 38,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 10,
                "Жиры": 5,
                "Углеводы": 26,
                "Ккал": 190
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г черники+30г зефира",
              "Маша": "120г греческого йогурта+80г черники+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 4,
                "Углеводы": 38,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 16,
                "Жиры": 4,
                "Углеводы": 25,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г яблока",
              "Маша": "80г сорбета+80г яблока"
            },
            "ingredients": [
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 19,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "СБ",
        "name": "Суббота",
        "meals": [
          {
            "id": "Завтрак",
            "title": "рисовая каша с персиком",
            "dish": {
              "Саша": "рисовая каша с персиком: 60г риса+220мл растительного молока+100г персика+1 яйцо",
              "Маша": "рисовая каша с персиком: 45г риса+170мл растительного молока+80г персика+1 яйцо"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 34,
                "Жиры": 16,
                "Углеводы": 52,
                "Ккал": 460
              },
              "Маша": {
                "Белки": 24,
                "Жиры": 13,
                "Углеводы": 36,
                "Ккал": 330
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "говядина с вареным картофелем и салатом",
            "dish": {
              "Саша": "говядина с вареным картофелем и салатом: 230г говядины+380г вареного картофеля+180г квашеной капусты+150г огурца",
              "Маша": "говядина с вареным картофелем и салатом: 165г говядины+270г вареного картофеля+140г квашеной капусты+120г огурца"
            },
            "ingredients": [
              {
                "product": "говядина",
                "unit": "г",
                "amount": 395
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 650
              },
              {
                "product": "квашеная капуста/кимчи",
                "unit": "г",
                "amount": 320
              },
              {
                "product": "огурцы",
                "unit": "г",
                "amount": 270
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 50,
                "Жиры": 9,
                "Углеводы": 96,
                "Ккал": 650
              },
              "Маша": {
                "Белки": 38,
                "Жиры": 8,
                "Углеводы": 64,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?meatballs%20healthy%20dinner",
            "photoQuery": "meatballs healthy dinner",
            "image": "images/meal_beef_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "индейка с рисом и баклажанами",
            "dish": {
              "Саша": "индейка с рисом и баклажанами: 240г индейки+320г риса+220г баклажанов+120г помидоров",
              "Маша": "индейка с рисом и баклажанами: 170г индейки+230г риса+170г баклажанов+100г помидоров"
            },
            "ingredients": [
              {
                "product": "баклажаны",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "индейка",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "рис",
                "unit": "г",
                "amount": 550
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 54,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 36,
                "Жиры": 11,
                "Углеводы": 42,
                "Ккал": 430
              }
            },
            "photo": "https://source.unsplash.com/900x650/?turkey%20healthy%20meal",
            "photoQuery": "turkey healthy meal",
            "image": "images/meal_turkey_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г персика+100г малины",
              "Маша": "200г кефира+100г персика+80г малины"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "персики",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 15,
                "Жиры": 6,
                "Углеводы": 42,
                "Ккал": 290
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 28,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г яблока+30г зефира",
              "Маша": "120г греческого йогурта+80г яблока+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 22,
                "Жиры": 4,
                "Углеводы": 34,
                "Ккал": 250
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 210
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г груши",
              "Маша": "80г сорбета+80г груши"
            },
            "ingredients": [
              {
                "product": "груши",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 110
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 12,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      },
      {
        "id": "ВС",
        "name": "Воскресенье",
        "meals": [
          {
            "id": "Завтрак",
            "title": "тост с авокадо и слабосоленой красной рыбой",
            "dish": {
              "Саша": "тост с авокадо и слабосоленой красной рыбой: 1 тост+40г авокадо+40г слабосоленой красной рыбы+60г киноа+220мл растительного молока+100г малины+1 яйцо",
              "Маша": "тост с авокадо и слабосоленой красной рыбой: 1 тост+25г авокадо+30г слабосоленой красной рыбы+45г киноа+170мл растительного молока+80г малины+1 яйцо"
            },
            "ingredients": [
              {
                "product": "авокадо",
                "unit": "г",
                "amount": 65
              },
              {
                "product": "киноа",
                "unit": "г",
                "amount": 105
              },
              {
                "product": "малина",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "слабосолёная красная рыба",
                "unit": "г",
                "amount": 70
              },
              {
                "product": "растительное молоко",
                "unit": "мл",
                "amount": 390
              },
              {
                "product": "тосты",
                "unit": "шт",
                "amount": 2
              },
              {
                "product": "яйца",
                "unit": "шт",
                "amount": 2
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 30,
                "Жиры": 15,
                "Углеводы": 54,
                "Ккал": 430
              },
              "Маша": {
                "Белки": 22,
                "Жиры": 12,
                "Углеводы": 36,
                "Ккал": 310
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_breakfast_bowl.png"
          },
          {
            "id": "Обед",
            "title": "курица с полбой и цветной капустой",
            "dish": {
              "Саша": "курица с полбой и цветной капустой: 240г курицы+300г полбы+220г цветной капусты+120г помидоров",
              "Маша": "курица с полбой и цветной капустой: 170г курицы+220г полбы+170г цветной капусты+100г помидоров"
            },
            "ingredients": [
              {
                "product": "курица",
                "unit": "г",
                "amount": 410
              },
              {
                "product": "полба",
                "unit": "г",
                "amount": 520
              },
              {
                "product": "помидоры",
                "unit": "г",
                "amount": 220
              },
              {
                "product": "цветная капуста",
                "unit": "г",
                "amount": 390
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 54,
                "Жиры": 8,
                "Углеводы": 98,
                "Ккал": 660
              },
              "Маша": {
                "Белки": 40,
                "Жиры": 6,
                "Углеводы": 66,
                "Ккал": 460
              }
            },
            "photo": "https://source.unsplash.com/900x650/?healthy%20breakfast%20bowl",
            "photoQuery": "healthy breakfast bowl",
            "image": "images/meal_chicken_grain_vegetables.png"
          },
          {
            "id": "Ужин",
            "title": "рыба с картофелем и брокколи",
            "dish": {
              "Саша": "рыба с картофелем и брокколи: 250г рыбы+360г картофеля+220г брокколи+100г листового салата",
              "Маша": "рыба с картофелем и брокколи: 180г рыбы+260г картофеля+170г брокколи+80г листового салата"
            },
            "ingredients": [
              {
                "product": "брокколи",
                "unit": "г",
                "amount": 390
              },
              {
                "product": "картофель",
                "unit": "г",
                "amount": 620
              },
              {
                "product": "листовой салат",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "рыба",
                "unit": "г",
                "amount": 430
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 48,
                "Жиры": 14,
                "Углеводы": 52,
                "Ккал": 540
              },
              "Маша": {
                "Белки": 35,
                "Жиры": 11,
                "Углеводы": 40,
                "Ккал": 410
              }
            },
            "photo": "https://source.unsplash.com/900x650/?salmon%20healthy%20dinner",
            "photoQuery": "salmon healthy dinner",
            "image": "images/meal_fish_potato_vegetables.png"
          },
          {
            "id": "Перекус 1",
            "title": "Перекус 1",
            "dish": {
              "Саша": "300г кефира+150г яблока+100г черники",
              "Маша": "200г кефира+100г яблока+80г черники"
            },
            "ingredients": [
              {
                "product": "кефир",
                "unit": "г",
                "amount": 500
              },
              {
                "product": "черника",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "яблоки",
                "unit": "г",
                "amount": 250
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 16,
                "Жиры": 6,
                "Углеводы": 40,
                "Ккал": 280
              },
              "Маша": {
                "Белки": 11,
                "Жиры": 5,
                "Углеводы": 27,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 2",
            "title": "Перекус 2",
            "dish": {
              "Саша": "150г греческого йогурта+100г киви+30г зефира",
              "Маша": "120г греческого йогурта+80г киви+20г зефира"
            },
            "ingredients": [
              {
                "product": "греческий йогурт",
                "unit": "г",
                "amount": 270
              },
              {
                "product": "зефир",
                "unit": "г",
                "amount": 50
              },
              {
                "product": "киви",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 20,
                "Жиры": 5,
                "Углеводы": 37,
                "Ккал": 260
              },
              "Маша": {
                "Белки": 15,
                "Жиры": 5,
                "Углеводы": 22,
                "Ккал": 200
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          },
          {
            "id": "Перекус 3",
            "title": "Перекус 3",
            "dish": {
              "Саша": "100г сорбета+100г персика",
              "Маша": "80г сорбета+80г персика"
            },
            "ingredients": [
              {
                "product": "персики",
                "unit": "г",
                "amount": 180
              },
              {
                "product": "сорбет",
                "unit": "г",
                "amount": 180
              }
            ],
            "macros": {
              "Саша": {
                "Белки": 8,
                "Жиры": 3,
                "Углеводы": 18,
                "Ккал": 120
              },
              "Маша": {
                "Белки": 6,
                "Жиры": 3,
                "Углеводы": 11,
                "Ккал": 100
              }
            },
            "photo": "https://source.unsplash.com/900x650/?fruit%20yogurt%20snack",
            "photoQuery": "fruit yogurt snack",
            "image": "images/meal_yogurt_fruit_snack.png"
          }
        ]
      }
    ],
    "shopping": [
      {
        "product": "авокадо",
        "unit": "г",
        "amount": 65
      },
      {
        "product": "баклажаны",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "брокколи",
        "unit": "г",
        "amount": 1170
      },
      {
        "product": "говядина",
        "unit": "г",
        "amount": 1580
      },
      {
        "product": "греческий йогурт",
        "unit": "г",
        "amount": 1890
      },
      {
        "product": "гречка",
        "unit": "г",
        "amount": 960
      },
      {
        "product": "груши",
        "unit": "г",
        "amount": 1400
      },
      {
        "product": "джем",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "зефир",
        "unit": "г",
        "amount": 300
      },
      {
        "product": "индейка",
        "unit": "г",
        "amount": 1640
      },
      {
        "product": "картофель",
        "unit": "г",
        "amount": 3220
      },
      {
        "product": "квашеная капуста/кимчи",
        "unit": "г",
        "amount": 640
      },
      {
        "product": "кефир",
        "unit": "г",
        "amount": 3500
      },
      {
        "product": "киви",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "киноа",
        "unit": "г",
        "amount": 1265
      },
      {
        "product": "курица",
        "unit": "г",
        "amount": 1230
      },
      {
        "product": "листовой салат",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "малина",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "морковь",
        "unit": "г",
        "amount": 420
      },
      {
        "product": "огурцы",
        "unit": "г",
        "amount": 540
      },
      {
        "product": "персики",
        "unit": "г",
        "amount": 1040
      },
      {
        "product": "полба",
        "unit": "г",
        "amount": 715
      },
      {
        "product": "помидоры",
        "unit": "г",
        "amount": 1380
      },
      {
        "product": "рис",
        "unit": "г",
        "amount": 1310
      },
      {
        "product": "рыба",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "слабосолёная красная рыба",
        "unit": "г",
        "amount": 70
      },
      {
        "product": "сорбет",
        "unit": "г",
        "amount": 1260
      },
      {
        "product": "твёрдый сыр",
        "unit": "г",
        "amount": 35
      },
      {
        "product": "тыква",
        "unit": "г",
        "amount": 780
      },
      {
        "product": "фунчоза",
        "unit": "г",
        "amount": 310
      },
      {
        "product": "цветная капуста",
        "unit": "г",
        "amount": 1170
      },
      {
        "product": "цукини/кабачки",
        "unit": "г",
        "amount": 700
      },
      {
        "product": "черника",
        "unit": "г",
        "amount": 900
      },
      {
        "product": "шпинат",
        "unit": "г",
        "amount": 320
      },
      {
        "product": "яблоки",
        "unit": "г",
        "amount": 1650
      },
      {
        "product": "растительное молоко",
        "unit": "мл",
        "amount": 1950
      },
      {
        "product": "тосты",
        "unit": "шт",
        "amount": 4
      },
      {
        "product": "яйца",
        "unit": "шт",
        "amount": 16
      }
    ]
  }
];
