import prisma from "./database";

// Questão 1:
//(async () => {
//  const resultCount = await prisma.student.groupBy({
//    by: ["class"],
//    _count: {
//      id: true
//    }
//  });
//  console.log(resultCount)
//})();


// Questão 2: 
(async () => {
  const resultCountWithoutJob = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    where: {
      jobId: null
    }
  });
  console.log(resultCountWithoutJob)
})();

