'use strict';

function checkGrades(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (typeof grades[i] !== 'number') {
      throw new Error('Invalid input. Please provide an array of numbers.');
    }

    const grade = grades[i];
    let predicate;

    if (grade >= 90){
      predicate = 'A';
    } else if (grade >= 80) {
      predicate = 'B';
    } else if (grade >= 70) {
      predicate = 'C';
    } else if (grade >= 60) {
      predicate = 'D';
    } else {
      predicate = 'E';
    }

    console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
  }
}

try {
  const studentGrades = [95, 85, 65, 80, 70];
  checkGrades(studentGrades);
} catch (e) {
  console.log(e);
}

/**
 * output:
 * Grade 1: 95 (A)
 * Grade 2: 85 (B)
 * Grade 3: 65 (D)
 * Grade 4: 80 (B)
 * Grade 5: 70 (C)
 */