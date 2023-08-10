<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  name: String,
});

const studentName = ref('');
const studentMateria = ref('');
const studentNota = ref('');
const students = ref([]);

const addStudent = () => {
  students.value.push({
    name: studentName.value,
    materia: studentMateria.value,
    nota: studentNota.value,
  });
  studentName.value = '';
  studentMateria.value = '';
  studentNota.value = '';
};
const getNotaDescription = (nota) => {
  if (nota >= 0 && nota < 3) {
    return 'Muy deficiente';
  } else if (nota >= 3 && nota < 5) {
    return 'Insuficiente';
  } else if (nota >= 5 && nota < 6) {
    return 'Suficiente';
  } else if (nota >= 6 && nota < 7) {
    return 'Bien';
  } else if (nota >= 7 && nota < 9) {
    return 'Notable';
  } else if (nota >= 9 && nota <= 10) {
    return 'Sobresaliente';
  } else {
    return '';
  }
};
</script>

<template>
    <header>Lista de Notas:</header>
    <main class="classroom" id="container">
    <section>
      <input type="text" v-model="studentName" placeholder="Nombre del alumno" />
      <input type="text" v-model="studentMateria" placeholder="Materia" />
      <input type="text" v-model="studentNota" placeholder="Nota" />
      <button id="addButton" @click="addStudent">Añadir</button>
    </section>
    <table id="myTable">
        <tr>
          <th>Nombre del alumno</th>
          <th>Materia</th>
          <th>Nota</th>
        </tr>
        <tr v-for="student in students" :key="student.name">
          <td>{{ student.name }}</td>
          <td>{{ student.materia }}</td>
          <td>{{ getNotaDescription(student.nota)}}: {{ student.nota }}</td>
        </tr>
      </table>
    </main>
</template>

<style>
section {
  display: flex;
  flex-direction: column;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  text-align: left;
  padding: 8px;
}
input[type="text"] {
  margin: 8px 0;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #ebd82d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>