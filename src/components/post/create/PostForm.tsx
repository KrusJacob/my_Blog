"use client";

import React from "react";
import Button from "../../UI/Button/Button";
import useCreatePost from "./useCreatePost";
import { useTranslation } from "react-i18next";

const PostForm = () => {
  const { handleCreate, isLoading } = useCreatePost();
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-3xl text-[var(--purpleColor)] font-bold text-white">{t("posts.create.title")}</h3>
      <form action={handleCreate} className="grid gap-3 text-xl mt-6">
        <input
          name="title"
          placeholder={t("posts.create.form.titlePlaceholder")}
          className="border px-3 py-2 w-full bg-slate-100 rounded"
          type="text"
          required
          maxLength={32}
        />
        <textarea
          name="body"
          placeholder={t("posts.create.form.contentPlaceholder")}
          className="border px-3 py-2 w-full bg-slate-100 rounded min-h-[300px] max-h-[580px]"
          required
          maxLength={5000}
        />
        <div>
          <Button disabled={isLoading} rounded="left">
            {t("posts.create.form.btn")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
