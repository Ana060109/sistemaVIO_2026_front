import { useState, useEffect } from "react";
import { Button, IconButton, Alert, Snackbar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../../axios/axios";

// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";

// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";

import ConfirmDelete from "../dialogDelete/ConfirmDelete";

function ListUsers() {
  // Constante criada para receber a lista de usuários da nossa API
  const [users, setUser] = useState([]);
  const [state, setState] = useState(0);
  // Constantes para controlar a exclusão de um usuário
  const [modalOpen, setModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });

  // Funcionalidade para exibir o alerta
  const showAlert = (severity, message) => {
    setAlert({ open: true, severity, message });
  };

  // Funcionalidade para fechar o alerta
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  const handleOpenModal = (user) => {
    setUserToDelete(user);
    setModalOpen(true);
  };

  // Função para criar a chamada da API
  async function getUsers() {
    await api.getUsers().then(
      (response) => {
        console.log(response);
        setUser(response.data.users);
      },
      (error) => {
        console.log(error);
      },
    );
  }
  useEffect(() => {
    getUsers();
  }, [state]);

  async function deleteUser() {
    try {
      const response = await api.deleteUser(userToDelete.cpf);
      setModalOpen(false);
      showAlert("success", response.data.message);
      setUserToDelete(null);
      setState(state + 1);
    } catch (error) {
      setModalOpen(false);
      setUserToDelete(null);
      console.error("Erro ao deletar", error);
      showAlert("error", error.response.data.error);
    }
  }

  const ListUsers = users.map((user) => {
    // Para cada linha do meu array de users eu retorno um component
    return (
      <TableRow>
        <TableCell align="center">{user.nome}</TableCell>
        <TableCell align="center">{user.email}</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => handleOpenModal(user)}>
            <DeleteIcon color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  });

  

  return (
    <div>
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.severity}>
          {alert.message}
        </Alert>
      </Snackbar>
      <ConfirmDelete
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={deleteUser}
        targetName={userToDelete?.nome}
      />
      <TableContainer style={{ margin: "2px" }} component={Paper}>
        <Table size="small" aria-label="">
          <TableHead style={{ backgroundColor: "red", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">NOME</TableCell>
              <TableCell align="center">EMAIL</TableCell>
              <TableCell align="center"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{ListUsers}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default ListUsers;
