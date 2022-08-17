// @ts-ignore
import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {Helmet} from "react-helmet";
import styles from "./index.module.css";

function initPayPalButton() {
  //@ts-ignore
  if(!paypal) return
	const description:any = document.querySelector("#smart-button-container #description");
	const amount :any = document.querySelector("#smart-button-container #amount");
	const descriptionError :any = document.querySelector("#smart-button-container #descriptionError");
	const priceError :any = document.querySelector("#smart-button-container #priceLabelError");
	const invoiceid :any = document.querySelector("#smart-button-container #invoiceid");
	const invoiceidError :any = document.querySelector("#smart-button-container #invoiceidError");
	const invoiceidDiv :any = document.querySelector("#smart-button-container #invoiceidDiv");

	const elArr :any = [description, amount];

	if (invoiceidDiv.firstChild.innerHTML.length > 1) {
		invoiceidDiv.style.display = "block";
	}

	const purchase_units = [];
	purchase_units[0] = {};
	purchase_units[0].amount = {};

	function validate(event) {
		return event.value.length > 0;
	}
  //@ts-ignore
	paypal
		.Buttons({
			style: {
				color: "gold",
				shape: "pill",
				label: "pay",
				layout: "vertical",
			},

			onInit: function (data, actions) {
				actions.disable();

				if (invoiceidDiv.style.display === "block") {
					elArr.push(invoiceid);
				}

				elArr.forEach(function (item) {
					item.addEventListener("keyup", function (event) {
						const result = elArr.every(validate);
						if (result) {
							actions.enable();
						} else {
							actions.disable();
						}
					});
				});
			},

			onClick: function () {
				if (description.value.length < 1) {
					descriptionError.style.visibility = "visible";
				} else {
					descriptionError.style.visibility = "hidden";
				}

				if (amount.value.length < 1) {
					priceError.style.visibility = "visible";
				} else {
					priceError.style.visibility = "hidden";
				}

				if (invoiceid.value.length < 1 && invoiceidDiv.style.display === "block") {
					invoiceidError.style.visibility = "visible";
				} else {
					invoiceidError.style.visibility = "hidden";
				}

				purchase_units[0].description = description.value;
				purchase_units[0].amount.value = amount.value;

				if (invoiceid.value !== "") {
					purchase_units[0].invoice_id = invoiceid.value;
				}
			},

			createOrder: function (data, actions) {
				return actions.order.create({
					purchase_units: purchase_units,
				});
			},

			onApprove: function (data, actions) {
				return actions.order.capture().then(function (orderData) {
					// Full available details
					console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));

					// Show a success message within this page, e.g.
					const element = document.getElementById("paypal-button-container");
					element.innerHTML = "";
					element.innerHTML = "<h3>Thank you for your payment!</h3>";

					// Or go to another URL:  actions.redirect('thank_you.html');
				});
			},

			onError: function (err) {
				console.log(err);
			},
		})
		.render("#paypal-button-container");
}


export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	useEffect(() => setTimeout(()=>initPayPalButton(),3000),[]);
	return (
		<Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <Helmet>
       <script
	src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=USD"
	data-sdk-integration-source="button-factory"
></script> 
      </Helmet>
			<main>
				<div id="smart-button-container">
					<div style={{ textAlign: "center" }}>
						<label htmlFor="description">Name </label>
						<input type="text" name="descriptionInput" id="description" maxLength={127} />
					</div>
					<p id="descriptionError" style={{ visibility: "hidden", color: "red", textAlign: "center" }}>
						Please enter a description
					</p>
					<div style={{ textAlign: "center" }}>
						<label htmlFor="amount">Amount </label>
						<input name="amountInput" type="number" id="amount" />
						<span>USD</span>
					</div>
					<p id="priceLabelError" style={{ visibility: "hidden", color: "red", textAlign: "center" }}>
						Please enter a price
					</p>
					<div id="invoiceidDiv" style={{ textAlign: "center", display: "none" }}>
						<label htmlFor="invoiceid"> </label>
						<input name="invoiceid" maxLength={127} type="text" id="invoiceid" value="" />
					</div>
					<p id="invoiceidError" style={{ visibility: "hidden", color: "red", textAlign: "center" }}>
						Please enter an Invoice ID
					</p>
					<div style={{ textAlign: "center", marginTop: "0.625rem" }} id="paypal-button-container"></div>
				</div>
			</main>
		</Layout>
	);
}
