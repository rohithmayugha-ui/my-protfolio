document.getElementById("contactForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    const response = await fetch("https://my-protfolio-mxpd.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Error sending data");
    }

  } catch (error) {
    console.error("Fetch error:", error);
    alert("Server not reachable");
  }
});