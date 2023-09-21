import Block from "../../js/block";
import template from "./form-change-profile.pug";
import { FormFiled } from "../../components/form-field";
import { BtnMain } from "../../components/btn-main";
import { userProfile } from "../../js/forms/user-profile";
import * as validate from "../../js/form-validation";
import { Form } from "../form";
import { render } from "../../js/render";
import { onSubmit } from "../../js/onSubmit";

export class FormChangeProfile extends Block {
  constructor() {
    super({
      events: {
        submit: (e: Event) => {
          if (validate.isFormValid(e)) {
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
      className: "simple-form profile__user-data profile__change-form",
      formId: "profile-change",
    });
    this.children.fieldEmail = new FormFiled({
      labelTitle: userProfile[0].label,
      fieldType: userProfile[0].fieldType,
      fieldName: userProfile[0].fieldName,
      formId: "profile-change",
      placeholder: userProfile[0].value,
      fieldPattern: "^\\w+([\\.\\-]?\\w+)*@\\w+([\\.\\-]?\\w+)*(\\.\\w{2,3})+$",
      onFocusout: (e: Event) => validate.isFieldValid(e),

    });
    this.children.fieldLogin = new FormFiled({
      labelTitle: userProfile[1].label,
      fieldType: userProfile[1].fieldType,
      fieldName: userProfile[1].fieldName,
      formId: "profile-change",
      placeholder: userProfile[1].value,
      fieldPattern: "^[A-Za-z][a-z0-9_\\-]{2,19}$",
      onFocusout: (e: Event) => validate.isFieldValid(e),

    });
    this.children.fieldName = new FormFiled({
      labelTitle: userProfile[2].label,
      fieldType: userProfile[2].fieldType,
      fieldName: userProfile[2].fieldName,
      formId: "profile-change",
      placeholder: userProfile[2].value,
      fieldPattern: "^[A-ZА-Я][a-zа-я\\-]+",
      onFocusout: (e: Event) => validate.isFieldValid(e),
    });
    this.children.fieldSecondName = new FormFiled({
      labelTitle: userProfile[3].label,
      fieldType: userProfile[3].fieldType,
      fieldName: userProfile[3].fieldName,
      formId: "profile-change",
      placeholder: userProfile[3].value,
      fieldPattern: "^[A-ZА-Я][a-zа-я]+",
      onFocusout: (e: Event) => validate.isFieldValid(e),
    });
    this.children.fieldChatName = new FormFiled({
      labelTitle: userProfile[4].label,
      fieldType: userProfile[4].fieldType,
      fieldName: userProfile[4].fieldName,
      formId: "profile-change",
      placeholder: userProfile[4].value,
      fieldPattern: "^[A-Za-z][a-z0-9_\\-]{2,19}$",
      onFocusout: (e: Event) => validate.isFieldValid(e),
    });
    this.children.fieldPhone = new FormFiled({
      labelTitle: userProfile[5].label,
      fieldType: userProfile[5].fieldType,
      fieldName: userProfile[5].fieldName,
      formId: "profile-change",
      placeholder: userProfile[5].value,
      fieldPattern: "^(8|\\+7)[0-9]{9,14}$",
      onFocusout: (e: Event) => validate.isFieldValid(e),
    });
    this.children.btnMain = new BtnMain({
      text: "Сохранить",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
