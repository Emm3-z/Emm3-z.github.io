const fileInput = document.getElementById("foto");
        const imageOutput = document.getElementById("foto-perfil");
        const elimFoto = document.getElementById("elimFoto");

        // Cargar imagen
        fileInput.addEventListener("change", () => {
            const file = fileInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageOutput.src = e.target.result;
                    elimFoto.style.display = "inline";
                };
                reader.readAsDataURL(file);
            }
        });

        // Eliminar imagen
        elimFoto.addEventListener("click", () => {
            imageOutput.src = "picPerfil.jpg"; // Ruta de la imagen predeterminada
            fileInput.value = "";
            elimFoto.style.display = "none";
        });

        // Editar perfil
        function editarPerfil() {
            const newTitle = prompt("Ingrese su nuevo título:", document.getElementById("title").innerText);
            const newDescrip = prompt("Ingrese su nueva descripción:", document.getElementById("descrip").innerText);
            if (newTitle) document.getElementById("title").innerText = newTitle;
            if (newDescrip) document.getElementById("descrip").innerText = newDescrip;
        }

        // Agregar historial académico
        function agregarAcademic() {
            const input = document.getElementById("estu-input");
            const value = input.value.trim();
            if (value) {
                const li = document.createElement("li");
                li.innerText = value;
                li.appendChild(crearBotonEliminar(li));
                document.getElementById("historia-estu").appendChild(li);
                input.value = "";
            }
        }

        // Agregar historial laboral
        function agregarLab() {
            const input = document.getElementById("Lab-input");
            const value = input.value.trim();
            if (value) {
                const li = document.createElement("li");
                li.innerText = value;
                li.appendChild(crearBotonEliminar(li));
                document.getElementById("historia-lab").appendChild(li);
                input.value = "";
            }
        }

        // Agregar habilidades
        function agregarHab() {
            const input = document.getElementById("Hab-input");
            const value = input.value.trim();
            if (value) {
                const li = document.createElement("li");
                li.innerText = value;
                li.appendChild(crearBotonEliminar(li));
                document.getElementById("habs").appendChild(li);
                input.value = "";
            }
        }

        function elimFil(button){
            const li=button.parentElement;
            li.remove();
        }

        // Crear botón de eliminar
        function crearBotonEliminar(listItem) {
            const button = document.createElement("button");
            button.innerText = "Eliminar";
            button.className = "btn btn-danger btn-sm ms-2";
            button.onclick = () => {
                listItem.remove();
            };
            return button;
        }