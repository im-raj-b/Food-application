import React from "react";
import classes from "@/app/meals/[dynamicSlug]/page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  console.log(params);
  const meal = getMeal(params.dynamicSlug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function Dynamic({ params }) {
  const meal = getMeal(params.dynamicSlug);

  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://next-bucket-food.s3.eu-north-1.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by{" "}
            <a
              href={`mailto:${meal.creator_email}`}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            {meal.creator}
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
