// Function to handle marking habit as complete
function markComplete(habitId) {
    // Get the progress bar element based on habitId
    var progressBar = document.getElementById("progress" + habitId);

    // Change the progress bar to 100% width
    progressBar.style.width = "100%";

    // Change the progress bar color to green
    progressBar.style.backgroundColor = "#4CAF50";

    // Disable the button to avoid marking the same habit again
    var button = document.querySelector("#habit" + habitId + " .btn");
    button.disabled = true;
    button.style.backgroundColor = "#e64a19";
    button.innerText = "Completed!";
}
