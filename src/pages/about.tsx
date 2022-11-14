import React from "react";

export function About() {
  return (
    <>
      <h1 style={{ color: "white", fontSize: "30px" }}>Our story</h1>
      <img className="mt-3 mb-2" src="res.jpg" />
      <div className="about-text">
        Mariner's bistro is the brainchild of Ryan Jackson and John Smith. We
        are located at 44 Isabella Street. The original bistro was opened in
        Ireland in 1970 by their father Jack so the boys decided to pay tribute
        to their father by re-opening the original almost forty years on. Jack's
        is a restaraunt for birthdays, catching up with friends, lunch on our
        patio in our winter garden, craft beer, cocktails and delicious Thai
        food. We cater for many events including wedding receptions so enquire
        now by emailing: marinersbookings@windmilltaverns.com
      </div>
    </>
  );
}
