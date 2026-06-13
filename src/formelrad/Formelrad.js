import {useState} from "react";
import '../css/mvp.css';
import formelrad from "../image/formelradelektronik.gif";
import InputField from "../formular/InputField";

export default function Formelrad() {
    const [values, setValues] = useState({
        u: 10,
        i: 2,
        r: "",
        p: ""
    })

    const [colors, setColors] = useState({
        u: "black",
        i: "black",
        r: "black",
        p: "black",
        message: "red"
    })

    function resetColors(){
        setColors( colors=> ({...colors, u:"black", i:"black", r:"black", p:"black"}));
    }
        const handleClear = (event) => {
        event.preventDefault();
        console.log("handleClear");
        setValues(values => ({...values, u:"", i:"", r:"", p:"", message: ""}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("calculate");
        let count = 0;
        if (values.u === "") count++;
        if (values.i === "") count++;
        if (values.r === "") count++;
        if (values.p === "") count++;
        if (count !== 2) {
            setValues(values => ({...values, message: "2 Felder leer lassen, 2 Felder ausfüllen"}));
        }else {
                setValues(values => ({...values, message: ""}));
            if (values.i === "" && values.r === "") {
                /*calculate i and r */
                setValues(values => ({...values, i: values.p / values.u}));
                setValues(values => ({...values, r: values.u * values.u / values.p}));
            } else if (values.i === "" && values.p === "") {
                /*calculate i and p */
                setValues(values => ({...values, i: values.u / values.r}));
                setValues(values => ({...values, p: values.u * values.u / values.r}));
            } else {
                /*calculate r and p */
                setValues(values => ({...values, r: values.u / values.i}));
                setValues(values => ({...values, p: values.u * values.i}));
            }
        }
    }

    return (
        <>
            <section>
                <header>
                    <h2>Formelrad</h2>
                    <img src={formelrad} width="200" alt="Formelrad"/>
                </header>
                <form onSubmit={handleSubmit}>
                    <InputField color={colors.u} value={values.u} label="Spannung" handleChange={e => {setValues(values => ({...values, u: e.target.value}))}} />
                    <InputField color={colors.i} value={values.i} label="Stromstärke" handleChange={e => {setValues(values => ({...values, i: e.target.value}))}} />
                    <InputField color={colors.r} value={values.r} label="Widerstand" handleChange={e => {setValues(values => ({...values, r: e.target.value}))}} />
                    <InputField color={colors.p} value={values.p} label="Leistung" handleChange={e => {setValues(values => ({...values, p: e.target.value}))}} />
                    <button type="submit">Calculate</button>
                    <button style={{margin:10}} onClick={handleClear}>Clear</button>
                </form>
            </section>
        </>
    )
}