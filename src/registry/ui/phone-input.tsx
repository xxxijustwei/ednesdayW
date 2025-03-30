import { useState } from "react";
import type { InputProps } from "./input";

interface Country {
    name: string;
    flag: string;
    dialCode: string;
}

interface PhoneInputProps extends InputProps {
    countries: Country[];
    sideOffset?: number;
    alignOffset?: number;
}

const PhoneInput = ({
    countries,
    sideOffset,
    alignOffset,
    ...props
}: PhoneInputProps) => {
    const [country, setCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState("");
};
