"use client";
import React from "react";
import classes from "@/app/components/meals/image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const clickHandler = () => {
    imageRef.current.click();
  };

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <>
      <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.preview}>
          {!image && <p>No picked image</p>}
          {image && <Image alt="picked image" fill src={image} />}
        </div>
        <div className={classes.controls}>
          <input
            className={classes.input}
            type="file"
            name={name}
            id={name}
            accept="image/png, image/jpg"
            ref={imageRef}
            onChange={handleFileChange}
            required
          />
          <button
            className={classes.button}
            type="button"
            onClick={clickHandler}
          >
            Pick Image
          </button>
        </div>
      </div>
    </>
  );
}
