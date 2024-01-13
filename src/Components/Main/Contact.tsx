import React, { useState, ChangeEvent, FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import Input from "../../Reuseable UI/InputUi";
import Button from "../../Reuseable UI/Button";
import { db } from "../../utils/firebase";
import classNames from "classnames";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const collect_ = collection(db, "portfolio");

  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collect_, {
        name,
        email,
        comment,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setName("");
    setEmail("");
    setComment("");
  };

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const commentHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const classes = classNames(
    "md:mx-10 mt-32 min-h-[30rem] flex flex-col justify-center items-center section",
    inView ? "" : "section--hidden"
  );
  return (
    <div ref={ref} className={classes}>
      <div className="w-full md:w-10/12">
        <h1 className="text-3xl font-bold">Contact</h1>
        <h1 className="text-sm text-center font-normal">Let's Connect 🤔</h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center mx-auto w-full md:w-1/2 gap-3"
        >
          <Input
            onChange={nameHandler}
            type="text"
            label="Name"
            className="w-full"
            value={name}
            required
          />
          <Input
            onChange={emailHandler}
            type="email"
            label="Email"
            className="w-full"
            value={email}
            required
          />
          <Input
            onChange={commentHandler}
            type="textarea"
            label="Comments"
            className="w-full"
            value={comment}
            required
          />

          <Button primary type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
