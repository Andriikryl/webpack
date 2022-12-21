import "./styles/index.scss"
import $ from "jquery";
import * as bootstrap from "bootstrap";

const entries = {
    name: 'kostia',
    age: 30,
};

const finalObj ={
    ...entries,
    languge: 'js',
    framework: 'reackt',
}

$(".block").text("hello from jquery");


console.log(finalObj);