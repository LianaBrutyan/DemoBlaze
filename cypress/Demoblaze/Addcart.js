class Addtocart {
    elements= {
        productName: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
        AddtoCartbutton: 'a[class="btn btn-success btn-lg"]',
        Cartbutton: '#cartur',
    }


       product(){
           cy.get(this.elements.productName).click()
           cy.get(this.elements.AddtoCartbutton).click()
           cy.wait(2000)
           //cy.get(this.elements.Cartbutton).click()

   }



    //assertcorrectmessage(){
      //  cy.contains('Product added.').should('be.visible')
    //}


   button(){
       cy.get(this.elements.Cartbutton).click()

   }




    assertpresenceproduct(){
        cy.get('#tbodyid>tr').should('be.visible')
    }

    }

export default Addtocart