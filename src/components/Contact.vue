<script>
import axios from 'axios';

export default {
    data: function() {
        return {
            form: {
                bot: '',
                name: '',
                email: '',
                message: '',
                number: ''
            },
            error: '',
            step: 1
        }
    },
    computed: {
        enableSubmit: function() {
            return !!this.form.name && !!this.form.email && !!this.form.message;
        }
    },
    methods: {
        resetForm: function() {
            this.step = 1;

            this.error = '';

            this.form = {
                bot: '',
                name: '',
                email: '',
                message: '',
                number: ''
            }
        },
        encode (data) {
            return Object.keys(data)
                .map(
                    key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
                )
                .join("&");
        },
        handleSubmit (e) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: this.encode({
                    "form-name": "contact",
                    ...this.form
                    })
                }
            )
            .then(() => {
                this.step = 2;
            })
            .catch((err) => {
                this.error = err.message;
            });
        }
    }
}
</script>

<template>
    <div class="contact-wrapper">

        <div class="contact">
            <h3>Get in touch</h3>

            <form @submit.prevent="handleSubmit" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot" v-if="step == 1">

                <div class="form-field-wrapper" v-show="false">
                    <input aria-label="bot" name="bot" type="text" placeholder="bot" v-model="form.bot"/>
                    <label>Don’t fill this out if you're human</label>
                </div>


                <div class="form-field-wrapper">
                    <input aria-label="Full Name" name="name" type="text" placeholder="Full Name" v-model="form.name"/>
                    <label><img title="valid value" class="valid" alt="valid" src="@/assets/check-circle.svg"/>Full Name</label>
                </div>

                <div class="form-field-wrapper">
                    <input aria-label="Email" type="email" name="email" placeholder="Email" v-model="form.email"/>
                    <label>
                        <img title="valid" class="valid" alt="valid" src="@/assets/check-circle.svg"/>
                        <img title="invalid value" class="invalid" alt="invalid" src="@/assets/alert-circle.svg"/>
                        Email
                    </label>
                </div>

                <div class="form-field-wrapper">
                    <input aria-label="Telephone" type="tel" name="number" placeholder="Phone Number" pattern=".+?[0-9]{7,14}" v-model="form.number"/>
                    <label>
                        <img title="valid" class="valid" alt="valid" src="@/assets/check-circle.svg"/>
                        <img title="invalid value" class="invalid" alt="invalid" src="@/assets/alert-circle.svg"/>
                        Phone Number
                    </label>
                </div>

                <div class="form-field-wrapper">
                    <textarea aria-label="Message" type="text" name="message" placeholder="Message" v-model="form.message"/>
                    <label><img title="valid value" class="valid" alt="valid" src="@/assets/check-circle.svg"/>Message</label>
                </div>

                <div class="wrapper">
                    <div class="error-wrapper" v-if="error">
                        <img title="error response" class="invalid" alt="invalid" src="@/assets/alert-circle.svg"/>
                        <span class="invalid-text">{{error}}</span>
                    </div>
                    <button type="submit" :disabled="!enableSubmit" class="submit btn-primary">contact</button>
                </div>

            </form>
            <div class="success" v-else>
                <h3>Success!</h3>
                <p>Your message has been sent</p>
                <img src="@/assets/confirmation.svg" alt="message successfully sent"/>
                <button class="btn-primary" @click="resetForm">go back</button>
            </div>
        </div>

        <div class="empty-block"></div>
    </div>
</template>

<style lang="scss" scoped>

    .empty-block {
        height: $spacing*8;
        position: absolute;
        background-color: $neutral-10;
        width: 100%;
        top: 0;
    }

    .contact-wrapper {
        position: relative;
        background-color: white;
    }

    .contact {
        display: flex;
        flex-direction: column;
        width: 80%;
        max-width: 700px;
        background-color: $neutral-0;
        border-radius: $radius $radius 0 0;
        box-shadow: 5px 5px 10px 1px rgba(0,0,0,0.3);
        margin: 0 auto;
        z-index: 2;
        padding: $spacing*3;
        min-height: 605px;
        position: relative;
    }

    .submit {
        font-size: 14px;
        display: flex;
        min-width: max-content;
    }

    .wrapper {
        display: flex;

        align-items: center;

        button {
            margin: 0 0 0 auto;
        }

        .error-wrapper {
            display: flex;
            align-items: center;
        }

        span {
            margin-left: 4px;
            display: flex;
            align-items: center;
            height: 100%;
        }

        .invalid-text {
            height: 100%;
            color: hsl(360, 100, 70);
        }

        .invalid {
            height: 22px;
            color: hsl(360, 100, 70);
        }
    }


    .success {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto 0;

        img {
            width: 50%;
            max-width: 250px;
            margin-bottom: $spacing*2;
        }
    }

    label img {
        margin-bottom: $spacing*2;
    }

    h3 {
        color: $secondary-70;
        margin-bottom: $spacing*3;
        font-size: $spacing*5 !important;
    }
    
    p {
        margin-bottom: $spacing*3;
    }

    h4 {
        margin-bottom: $spacing*3;
    }

    b {
        font-weight: 700;
    }


</style>

<style lang="scss" global>

    h3 {
        font-size: 24px !important;
        font-weight: 700 !important;
    }

    p {
        font-size: 18px !important;
    }

    input {
        max-height: 40px;
    }

    textarea {
        resize: none;
        min-height: 400px;
    }
   
    input, textarea {
        width: 100%;
        border-radius: $radius;
        border: 1px solid $neutral-60;
        padding: $spacing;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 16px;

        &:invalid {
            ~ label {
                color: hsl(360, 100, 70);
                .invalid {
                    display: initial;
                }
            }


            box-shadow: none;
            border: 1px solid hsl(360, 100, 70);
        }

        &:valid {
            ~ label  {
                color: $secondary-70;
                .valid {
                    display: initial;
                }
            }
        }

        ~ label {
            position: absolute;
            top: $spacing;
            left: calc(#{$spacing} + 2px);

            img {
                height: 12px;
                margin-right: $spacing/2 !important;
            }
        }

        &:focus {

            ~ label {
                color: $primary-70;
                font-weight: 700;
            }
            border: 1px solid $primary-70;
        }

        &:not(:placeholder-shown) {
            padding: $spacing*2.5 $spacing $spacing $spacing;
        }

        &:not(:placeholder-shown) + label {
            display: flex !important;
        }
    }

    .form-field-wrapper {
        display: flex;
        margin-bottom: $spacing*3 !important;
        position: relative;

        .valid, .invalid {
            display: none;
        }

        label {
            display: none;
            font-size: 12px;
        }
    }
</style>