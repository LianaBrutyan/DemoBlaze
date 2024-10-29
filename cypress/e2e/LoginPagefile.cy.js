import TestLogin from "../Demoblaze/Login";

describe('Test Demoblaze', () => {

    it('Test login functionality ', () => {


        const testLogin = new TestLogin()

        testLogin.open()
        cy.wait(4000)
       testLogin.login('TestPOM', 'testing')

       testLogin.assertsuccessfulLogin()

        testLogin.assertvisibleLogout()

        testLogin.assertInvisibleLogin()


    })



})