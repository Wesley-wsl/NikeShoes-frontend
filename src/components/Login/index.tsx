import { PersonFill } from "@styled-icons/bootstrap";
import { Hide, Show } from "@styled-icons/boxicons-regular";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { errorToast } from "../../helpers/toast";

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const { signIn } = useContext(AuthContext);

    async function handleLoginUser(e: FormEvent) {
        e.preventDefault();

        if (!email || !password) return errorToast("Email/password incorrect");

        signIn({ email, password });
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

            <form onSubmit={handleLoginUser}>
                <div>
                    <input
                        data-testid="form-email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        maxLength={50}
                        onChange={e => setEmail(e.target.value)}
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
                        placeholder="Password"
                        autoComplete="on"
                        maxLength={18}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span
                        className="icon password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <Show size={20} aria-label="show password" />
                        ) : (
                            <Hide size={20} aria-label="hide password" />
                        )}
                    </span>
                </div>

                <button type="submit" data-testid="form-btn">
                    Login
                </button>
            </form>

            <p>
                <Link href="/register">
                    Don&apos; t have an account? register here
                </Link>
            </p>
        </>
    );
};

export default Login;
