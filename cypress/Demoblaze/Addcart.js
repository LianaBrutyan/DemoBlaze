class Addtocart {
    elements= {
        productName: '#tbodyid > div:nth-child(1) > div > div > h4 > a',
        AddtoCartbutton: '[a[onclick=addToCart(1)]',
        Cartbutton: '#cartur',
    }


       product(){
           cy.get(this.elements.productName).click()
           cy.get(this.elements.AddtoCartbutton).click()
           cy.get(this.elements.Cartbutton).click()

   }

    assertcorrectmessage(){
        cy.contains('Product added').should('be.visible')
    }

    assertpresenceproduct(){
        cy.get('#tbodyid>tr').should('be.visible')
    }

    }

export default Addtocart