<script setup>
import { ref } from 'vue';

const studentName = ref('');
const subjectName = ref('');
const studentScore = ref('');
const students = ref([]);

const addStudent = () => {
  students.value.push({
    name: studentName.value,
    subject: subjectName.value,
    score: studentScore.value,
  });
  studentName.value = '';
  subjectName.value = '';
  studentScore.value = '';
};
const getScale = (score) => {
  const scaleMap = {
    0: 'Muy deficiente',
    3: 'Insuficiente',
    5: 'Suficiente',
    6: 'Bien',
    7: 'Notable',
    9: 'Sobresaliente',
  };

  for (const key in scaleMap) {
    if (score >= key && score <= 10) {
      return scaleMap[key];
    }
  }

  return '';
};
</script>

<template>
    <header>Lista de Notas:</header>
    <main class="classroom" id="container">
      <section>
        <input type="text" v-model="studentName" placeholder="Nombre del alumno" />
        <input type="text" v-model="subjectName" placeholder="Materia" />
        <input type="text" v-model="studentScore" placeholder="Nota" />
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
          <td>{{ student.subject }}</td>
          <td>{{ getScale(student.score)}}: {{ student.score }}</td>
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