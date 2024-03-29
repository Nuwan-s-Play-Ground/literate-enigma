import { run } from "./app/app";
import "./main.css";
import { ComponentService } from "./app/component.service";
import { AlertService } from "./app/alert.service";

const alertService = new AlertService();
const componentService = new ComponentService();

run(alertService, componentService);