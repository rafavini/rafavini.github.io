document.addEventListener("DOMContentLoaded", function () {
    const terminalBody = document.getElementById("terminal-body");
    let inputField = document.getElementById("command-input");

    function executeCommand(command) {
        let output = document.createElement("div");
        output.innerHTML = `<span class="prompt">rafael Vinicius:~/portifolio$</span> ${command}`;
        terminalBody.insertBefore(output, inputField.parentElement);

        let response = document.createElement("div");
        switch (command) {
            case "help":
                response.innerHTML = data.commands.help;
                break;
            case "clear":
                terminalBody.innerHTML = "";
                recreateInput();
                return;
            case "experiencias":
                response.innerHTML = data.commands.experiencias;
                break;
            case "sobre mim":
                response.innerHTML = data.commands.sobreMim;
                break;
            case "get linkedin":
                window.open("https://www.linkedin.com/in/rafael-vinicius-954698281", "_blank");
                response.innerHTML = "Abrindo LinkedIn em uma nova aba...";
                break;
            case "get github":
                window.open("https://github.com/rafavini", "_blank");
                response.innerHTML = "Abrindo github em uma nova aba...";
                break;
            case "get curriculo":
                const a = document.createElement("a");
                a.href = "assets/Curriculo - Rafael Vinicius.pdf";
                a.setAttribute("download", "Curriculo - Rafael Vinicius.pdf");
                a.setAttribute("target", "blank");
                a.click();
                response.innerHTML = "Baixando arquivo ...";
                break;
            default:
                response.textContent = data.defaultResponse;
        }
        terminalBody.insertBefore(response, inputField.parentElement);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function recreateInput() {
        let inputLine = document.createElement("div");
        inputLine.className = "input-line";
        inputLine.innerHTML = '<span class="prompt">rafael Vinicius:~/portifolio$</span> <input type="text" id="command-input" autofocus>';
        terminalBody.appendChild(inputLine);
        inputField = document.getElementById("command-input");
        inputField.focus();
        inputField.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                executeCommand(inputField.value.trim());
                inputField.value = "";
            }
        });
    }

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            executeCommand(inputField.value.trim());
            inputField.value = "";
        }
    });
});