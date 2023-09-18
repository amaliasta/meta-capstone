import React from "react";
import classes from "./Testimonials.module.css";
import Card from "../UI/Card";
import avatar1 from "../../assets/avatar__1.jpg"
import avatar2 from "../../assets/avatar__2.jpg"
import avatar3 from "../../assets/avatar__3.jpg"

const Testimonials = () => {
    const testimonials = [
        {
            src: avatar2,
            name: "Jane Smith",
            text: "Amazing dining experience! Little Lemon exceeded my expectations with their delicious dishes, impeccable service, and cozy ambiance. A must-visit spot for any food lover in the Windy City.",
        },
        {
            src: avatar3,
            name: "Andrew Moe",
            text: "Little Lemon offers a delightful culinary journey through Chicago's flavors. From their mouthwatering deep-dish pizza to their delectable desserts, every bite was a taste of perfection.",
        },
        {   src: avatar1,
            name: "John Doe",
            text: "Little Lemon  is a true gem in the city's food scene. The diverse menu, friendly staff, and inviting atmosphere make it my go-to restaurant for both casual dining and special occasions.",
        },
    ];

    return (
        <section className={classes.testimonials}>
            <div className={classes.testimonials__content}>
                <h2>Testimonials</h2>
                <div className={classes.testimonial__items}>
                    {testimonials.map((item, idx) => (
                        <Card key={idx} alt={item.name} src={item.src} name={item.name}>
                            {item.text}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
