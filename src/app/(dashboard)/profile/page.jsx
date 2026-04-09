"use client"

import React, {useEffect} from 'react'
import Button from '@/src/components/atoms/Button'
const page = () => {

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    return (
        <>
            <div className="my-profile">
                <h2>My Profile</h2>

                <form action="" className="form form-grid" >
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" id="name" />
                        <label htmlFor="name">First Name</label>
                    </div>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" id="name" />
                        <label htmlFor="name">Last Name</label>
                    </div>

                    <div className="form-group">
                        <input type="tel" name="phone" className="form-control" id="phone" />
                        <label htmlFor="email">Mobile Number</label>
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" className="form-control" id="email" />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-group full">
                        <textarea name="message" id="message" className="form-control"></textarea>
                        <label htmlFor="message">Message</label>
                    </div>

                    <div className="submit-btn full">
                        <Button className="btn secondary-btn" href="/">Update Profile</Button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default page