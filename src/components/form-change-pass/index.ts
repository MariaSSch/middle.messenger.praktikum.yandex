import Block from "../../js/block";
import template from "./form-change-pass.pug";
import { BtnMain } from "../../components/btn-main";
import { FormFiled } from "../../components/form-field";
import { fieldsChangePass } from "../../js/forms/change-pass-fields";
import * as validate from "../../js/form-validation";
import { Form } from "../form";
import { render } from "../../js/render";
import { onSubmit } from "../../js/onSubmit";

export class FormChangePass extends Block {
  constructor() {
    super({
      events: {
        submit: (e: Event) => {
          const pass1 = this.children.formFiledNewPass.getValue();
          const pass2 = this.children.formFiledNewDouble.getValue();
          if (pass1 === pass2 && validate.isFormValid(e)) {
            onSubmit.call(this);
            render("profile");
          } else {
            e.preventDefault();
            e.stopImmediatePropagation();
            console.log("form is invalid");
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      className: "simple-form profile__user-data profile__change-pass-form",
      formId: "pass-change",
    });
    this.children.formFiledOldpass = new FormFiled({
      labelTitle: fieldsChangePass[0].label,
      fieldType: fieldsChangePass[0].type,
      fieldName: fieldsChangePass[0].name,
      formId: "pass-change",
      placeholder: fieldsChangePass[0].value,
      fieldPattern: "^[A-Za-z0-9]{8,40}$",
      onFocusout: (e: Event) => validate.isFieldValid(e),

    });
    this.children.formFiledNewPass = new FormFiled({
      labelTitle: fieldsChangePass[1].label,
      fieldType: fieldsChangePass[1].type,
      fieldName: fieldsChangePass[1].name,
      formId: "pass-change",
      placeholder: fieldsChangePass[1].value,
      fieldPattern: "^[A-Za-z0-9]{8,40}$",
      onFocusout: (e: Event) => validate.isFieldValid(e),
    });
    this.children.formFiledNewDouble = new FormFiled({
      labelTitle: fieldsChangePass[2].label,
      fieldType: fieldsChangePass[2].type,
      fieldName: fieldsChangePass[2].name,
      formId: "pass-change",
      placeholder: fieldsChangePass[2].value,
      fieldPattern: "^[A-Za-z0-9]{8,40}$",
      onFocusout: (e: Event) => {
				validate.isFieldValid(e);
        const value = this.children.formFiledNewPass.getValue();
        validate.isPassMatching(e, value);
      },
    });
    this.children.btnMain = new BtnMain({
      text: "Сохранить",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
