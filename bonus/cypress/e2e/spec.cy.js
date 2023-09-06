/// <reference types="Cypress" />

const { navObjects } = require("../support/page_objects/navObjects.js");
const navigation = new navObjects();

describe("quick product menu/window verification", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("productWindow").then((data) => {
      this.data = data;
    });
  });

  // with more time would probably do something to iterate over each section much quicker/easier than what I did
  it("verifies the product dropdown for the nav from the homepage", function () {
    navigation.productToggle().trigger("mouseover");
    navigation.productDropdown().within(() => {
      navigation.productMenuTitle().should("contain", "Products");

      navigation.productsLeftColumn().within(() => {
        //focus on each section in order to not get multiple elements since it would check everything
        navigation
          .navLinks()
          .eq(0) //easier to do this right now because of lack of specific attribute names
          .should("contain", this.data.terminal.title)
          .and("contain", this.data.terminal.content)
          .find("a")
          .should("have.attr", "href", this.data.terminal.href);
        navigation
          .navLinks()
          .eq(1)
          .should("contain", this.data.exchange.title)
          .and("contain", this.data.exchange.content)
          .find("a")
          .should("have.attr", "href", this.data.exchange.href);
      });

      cy.get(".product_right-column").within(() => {
        navigation
          .navLinks()
          .eq(0)
          .should("contain", this.data.terminalEnt.title)
          .and("contain", this.data.terminalEnt.content)
          .find("a")
          .should("have.attr", "href", this.data.terminalEnt.href);
        navigation
          .navLinks()
          .eq(1)
          .should("contain", this.data.storefront.title)
          .and("contain", this.data.storefront.content)
          .find("a")
          .should("have.attr", "href", this.data.storefront.href);
      });

      navigation.productsAnalyticsTitle().should("contain", "Analytics");

      navigation.productsAnalyticsSection().within(() => {
        navigation
          .navLinks()
          .eq(0)
          .should("contain", this.data.clauseLink.title)
          .and("contain", this.data.clauseLink.content)
          .find("a")
          .should("have.attr", "href", this.data.clauseLink.href);
        navigation
          .navLinks()
          .eq(1)
          .should("contain", this.data.submissionLink.title)
          .and("contain", this.data.submissionLink.content)
          .find("a")
          .should("have.attr", "href", this.data.submissionLink.href);
      });
    });
  });
});
