export class LoginPage{

    username_textbox_locator = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_textbox_locator = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    login_button_locator = '.oxd-button'

    enterUsername(username){
        cy.get(this.username_textbox_locator).type(username)
    }

    enterPassword(password){
        cy.get(this.password_textbox_locator).type(password);
    }

    clickLogIn(){
        cy.get(this.login_button_locator).click();
    }

}