
BEGIN;

DROP TABLE IF EXISTS "category", "post";

CREATE TABLE "category" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "label" TEXT NOT NULL,
  "route" TEXT NOT NULL
);

CREATE TABLE "post" (
  "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  "slug" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "excerpt" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "category_id" INT REFERENCES "category"("id")
);

COMMIT;