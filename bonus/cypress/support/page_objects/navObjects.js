export class navObjects {
  //because it's a consistent nav experience, using PO for the nav specifically
  productToggle() {
    return cy.get("#w-dropdown-toggle-2");
  }

  productDropdown() {
    return cy.get("#w-dropdown-list-2");
  }

  productMenuTitle() {
    return cy.get(".product-menu-title");
  }

  productsLeftColumn() {
    return cy.get(".product_leftcolumn");
  }

  navLinks() {
    //specific attributes would be nice for each of these/better naming
    return cy.get(".flex_navlinks");
  }

  productsRightColumn() {
    return cy.get(".product_right-column");
  }

  productsAnalyticsTitle() {
    return cy.get(".product-menu-title-second");
  }

  productsAnalyticsSection() {
    return cy.get("._2-column-even-grid");
  }
}
