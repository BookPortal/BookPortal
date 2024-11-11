function confirmSubscription(plan, price) {
    const message = `Thank you for choosing the ${plan} subscription plan for ${price}. You’re officially part of our community, and we’re thrilled to have you! Expect exciting content, exclusive updates, and a seamless library experience.`;
    document.getElementById('subscriptionMessage').innerText = message;
    document.getElementById('subscriptionModal').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.close-btn').onclick = function() {
        document.getElementById('subscriptionModal').style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === document.getElementById('subscriptionModal')) {
            document.getElementById('subscriptionModal').style.display = 'none';
        }
    }
});