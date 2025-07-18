import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            navigation: {
              home: "Home",
              posts: "Posts",
              rating: "Rating",
              profile: "Profile",
            },
          },
          home: {
            welcomeTitle: "Welcome to ",
            description:
              "Here, you can share your thoughts, ideas, and stories with the world. Publish your posts, read and rate others’ entries, leave comments, and join the discussions. Become a part of our community and get inspired by new ideas every day!",
            btn: "Create your first post",
          },
          posts: {
            title: "Posts",
            newPost: "New post",
            update: "Update",
            filters: {
              search: {
                placeholder: "search post...",
              },
              filter: {
                title: "Filter by:",
                all: "All",
                my: "My",
              },
              sort: {
                title: "Sort by:",
                new: "new",
                old: "old",
                likes: "likes",
              },
            },
            create: {
              title: "New post",
              form: {
                titlePlaceholder: "title",
                contentPlaceholder: "content",
                btn: "Сreate post",
              },
            },
          },
          postPage: {
            btns: {
              back: "Back",
              delete: "Delete",
            },
            comments: {
              form: {
                placeholder: "comment...",
                btn: "Leave a comment",
                toast: "You need to login",
              },
              title: "Comments",
            },
          },
          rating: {
            title: "Rating",
            filter: {
              title: "Rating by",
              authors: "authors",
              liked_post: "liked posts",
            },
            item: {
              descr_one: "{{count}} post",
              descr_other: "{{count}} posts",
            },
          },
          profile: {
            title: "My Profile",
            user: {
              login: "Login:",
              name: "Name:",
              changeAvatar: "Change avatar",
            },
            statistics: {
              title: "Statistic",
              posts: "Total posts:",
              likes: "Total likes:",
            },
          },
          signin: {
            form: {
              email: "email",
              password: "password",
              btn: "Login",
            },
            create: "Create Account",
          },
          registration: {
            form: {
              email: "email",
              name: "name",
              password: "password",
              btn: "Submit",
              errors: {
                required: "the field is required",
                email: {
                  incorrect: "Incorrect email",
                },
                name: {
                  length: "Required length name: 2-24 characters",
                },
                password: {
                  length: "Required length password: 4-24 characters",
                },
              },
            },
            back: "Back",
          },
          notFound: {
            descr: "Page not found",
            button: "Return Home",
          },
        },
      },
      ru: {
        translation: {
          header: {
            navigation: {
              home: "Главная",
              posts: "Посты",
              rating: "Рейтинг",
              profile: "Профиль",
            },
          },
          home: {
            welcomeTitle: "Добро пожаловать в ",
            description:
              "Здесь вы можете делиться своими мыслями, идеями и историями с миром. Публикуйте свои посты, читайте и оценивайте записи других пользователей, оставляйте комментарии и участвуйте в обсуждениях. Присоединяйтесь к нашему сообществу и вдохновляйтесь новыми идеями каждый день!",
            btn: "Создайте свой 1-ый пост",
          },
          posts: {
            title: "Посты",
            newPost: "Новый пост",
            update: "Обновить",
            filters: {
              search: {
                placeholder: "поиск поста...",
              },
              filter: {
                title: "Фильтр:",
                all: "Все",
                my: "Мои",
              },
              sort: {
                title: "Сортировка:",
                new: "Новые",
                old: "Старые",
                likes: "Лучшие",
              },
            },
            create: {
              title: "Новый пост",
              form: {
                titlePlaceholder: "заголовок",
                contentPlaceholder: "описание",
                btn: "Создать пост",
              },
            },
          },
          postPage: {
            btns: {
              back: "Назад",
              delete: "Удалить",
            },
            comments: {
              form: {
                placeholder: "комментарий...",
                btn: "Оставить комментарий",
                toast: "Вам необходимо авторизоваться",
              },
              title: "Комментарии",
            },
          },
          rating: {
            title: "Рейтинг",
            filter: {
              title: "Рейтинг по",
              authors: "авторам",
              liked_post: "лучшим постам",
            },
            item: {
              descr_one: "{{count}} пост",
              descr_few: "{{count}} поста",
              descr_other: "{{count}} постов",
              descr_many: "{{count}} постов",
            },
          },
          profile: {
            title: "Мой Профиль",
            user: {
              login: "Логин:",
              name: "Имя:",
              changeAvatar: "Изменить аватар",
            },
            statistics: {
              title: "Статистика",
              posts: "Всего постов:",
              likes: "Всего лайков:",
            },
          },
          signin: {
            form: {
              email: "электронная почта",
              password: "пароль",
              btn: "Войти",
            },
            create: "Создать аккаунт",
          },
          registration: {
            form: {
              email: "электронная почта",
              name: "Имя",
              password: "пароль",
              btn: "Потвердить",
              errors: {
                required: "Это поле является обязательным для заполнения",
                email: {
                  incorrect: "Некорректный адрес электронной почты",
                },
                name: {
                  length: "Требуемая длина имени: 2-24 символа",
                },
                password: {
                  length: "Требуемая длина пароля: 4-24 символа",
                },
              },
            },
            back: "Назад",
          },
          notFound: {
            descr: "Страница не найдена",
            button: "Вернуться на главную",
          },
        },
      },
    },
  });

export default i18n;
