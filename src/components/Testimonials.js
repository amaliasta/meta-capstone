import React from "react";
import classes from './Testimonials.module.css';
import Card from "./UI/Card";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jenny Smith",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quas saepe, perferendis eos id a voluptate commodi eum nesciunt, distinctio voluptatum minima, omnis sunt totam quidem fugit nisi similique consequatur.",
        },
        {
            name: "Olivia Pearce",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti ut soluta atque est illum quo, quod harum quia vero! Amet fugiat non maiores qui repellendus beatae eveniet rerum cumque.",
        },
        {
            name: "John Altson",
            text: "Ultrices mi tempus imperdiet nulla malesuada pellentesque. Vitae elementum curabitur vitae nunc sed. Aliquam ut porttitor leo a diam sollicitudin tempor id. Nulla posuere sollicitudin aliquam ultrices. Risus ultricies tristique nulla aliquet enim tortor at auctor. Amet purus gravida quis blandit. Sit amet tellus cras adipiscing enim eu turpis egestas pretium.",
        },
    ];

    return (
        <section className={classes.section}>
            <h2>Testimonials</h2>
            <div className={classes.testimonials}>
                {testimonials.map((item, idx) => (
                    <Card key={idx} alt={item.name}>
                        {item.text}
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
