import { PersonFill } from "@styled-icons/bootstrap";
import { Hide, Show } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

import { errorToast, successToast } from "../../helpers/toast";
import { api } from "../../services/api";

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState(String);
    const [lastName, setLastName] = useState(String);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);

    async function handleCreateUser(e: FormEvent) {
        e.preventDefault();

        if (!firstName) return errorToast("FirstName is required");
        if (!lastName) return errorToast("LastName is required");
        if (!email) return errorToast("Email is required");
        if (!password) return errorToast("Password is required");
        if (password.length < 4)
            return errorToast("Password must be at least 4 characters");

        await api
            .post("users", {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
            })
            .then(() => {
                successToast("User created with success");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            })
            .catch(error => errorToast(error.response.data.error));
    }
    return (
        <>
            <div>
                <Image
                    src="/assets/icons/Logo.svg"
                    width="98"
                    height="98"
                    alt="Nike logo"
                />
                <h1>NikeShoes</h1>
            </div>

            <form onSubmit={handleCreateUser}>
                <div>
                    <input
                        data-testid="form-first_name"
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        maxLength={20}
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <span className="icon">
                        <PersonFill size={20} aria-label="person icon" />
                    </span>
                </div>
                <div>
                    <input
                        data-testid="form-last_name"
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        maxLength={20}
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <span className="icon">
                        <PersonFill size={20} aria-label="person icon" />
                    </span>
                </div>
                <div>
                    <input
                        data-testid="form-email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        maxLength={50}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <span className="icon">
                        <PersonFill size={20} aria-label="person icon" />
                    </span>
                </div>
                <div>
                    <input
                        data-testid="form-password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        autoComplete="on"
                        placeholder="Password"
                        maxLength={18}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />

                    <span
                        className="icon password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <Show size={20} aria-label="show password" />
                        ) : (
                            <Hide size={20} aria-label="hiden password" />
                        )}
                    </span>
                </div>

                <button data-testid="form-btn" type="submit">
                    Register
                </button>
            </form>

            <p>
                <Link href="/">Already have an account ? login here</Link>
            </p>
        </>
    );
};

export default Register;
