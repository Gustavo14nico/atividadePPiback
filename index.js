import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

let dados = [];

app.use(express.json());
app.use(cors());

app.get("/dados", (req, res) => {
    res.status(200).json({ dados: dados });
});

app.post("/dados", (req, res) => {
    let { nome, cpf, nascimento, nome_mae, telefone, email } = req.body;

    try {
        dados.push(
            {
                nome,
                cpf,
                nascimento,
                nome_mae,
                telefone,
                email
            }
        );

        res.status(201).json({ msg: "Enviado com sucesso!" });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ msg: "Erro no servidor..." });      
    }
});

app.use((req, res) => {
    res.status(404).json({ msg: "Página não encontrada!" });   
});

app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}/`));