class TestLogin {
    elements={

        usernameField:'#loginusername',
        passwordField: '#loginpassword',
        Loginbutton:'[onclick="logIn()"]',
        button:'#login2',


    }

    open(){
        cy.visit('https://demoblaze.com/index.html')
    }
    type(selector,text){
        cy.get(selector).type(text,{delay: 100 })
        //cy.get('#loginusername').focus().clear().type('TestLia').blur();
    }

    button(selector){
        cy.get(selector).click()

    }

    login(username, password){

        this.button(this.elements.button)
        this.type(this.elements.usernameField,username)
        this.type(this.elements.passwordField,password)
        this.button(this.elements.Loginbutton)


    }



    assertsuccessfulLogin(){
      cy.contains('Welcome TestPOM').should('be.visible')
    }

    assertvisibleLogout(){
        cy.get('#logout2').should('be.visible')
    }

    assertInvisibleLogin(){
        cy.get('#logInModal').should('not.be.visible')
    }


}

export default TestLogin