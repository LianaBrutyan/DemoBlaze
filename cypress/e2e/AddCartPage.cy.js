import TestLogin from "../Demoblaze/Login";
import Addtocart from "../Demoblaze/Addcart";

describe('Test Demoblaze', () => {

    it('Test login functionality ', () => {


        const testLogin = new TestLogin()

        testLogin.open()

        testLogin.login('TestPOM', 'testing')

        const testAddCart = new Addtocart()

        testAddCart.product()
        //testAddCart.assertcorrectmessage()
        testAddCart.button()
        testAddCart.assertpresenceproduct()


    })
})





