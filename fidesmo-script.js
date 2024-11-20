document.addEventListener("shopify:loaded", function () {
    const orderId = Shopify.checkout ? Shopify.checkout.id : null;
    const email = Shopify.checkout ? Shopify.checkout.email : null;

    console.log("Order ID:", orderId);
    console.log("Customer Email:", email);

    const container = document.getElementById("fidesmo-iframe-container");
    if (container) {
        window.fidesmo.Shopify.injectIframe({
            shopId: "nayar", // Replace with your Fidesmo Shop ID
            purchseld: orderId,
            email: email,
            batchId: 578,
            parent: container,
            lang: "en",
        }).catch((error) => {
            console.error("Error injecting iframe:", error);
        });
    } else {
        console.error("Fidesmo iframe container not found!");
    }
});
