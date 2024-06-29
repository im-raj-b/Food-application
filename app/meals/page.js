import React from "react";
import classes from "@/app/meals/page.module.css";
import Link from "next/link";
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export const metadata = {
  title: "All Meals",
  description: "Delicious meals, shared by a food community",
};

export default async function MealsPage() {
  console.log("Fetching");
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{}{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <div className={classes.loading}>Fetching Meals.........</div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
