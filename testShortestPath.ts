import WeightedGraph from "./WeightedGraph";

enum Streets {
    PRIMERA = "Calle Primera",
    CENTRAL = "Calle Central",
    PAYA = "Calle Paya",
    ELLLANO = "Calle El Llano",
    AUTOPISTA = "Autopista 30 de Mayo",
    CARACOLES = "Calle Caracoles",
    INDEPENDENCIA = "Avenida Independencia",
    MARGINAL = "Marginal",
    LEONICIORUIZ = "Calle Leonicio Ruiz",
    ARENA = "Calle Arena"
}

const graph = new WeightedGraph(
    Streets.PRIMERA,
    Streets.INDEPENDENCIA,
    Streets.CENTRAL,
    Streets.PAYA,
    Streets.ELLLANO,
    Streets.AUTOPISTA,
    Streets.CARACOLES,
    Streets.MARGINAL,
    Streets.LEONICIORUIZ,
    Streets.ARENA
)

graph.addEdge(Streets.PRIMERA, Streets.CENTRAL, 68.37)
graph.addEdge(Streets.CENTRAL, Streets.INDEPENDENCIA, 66.94)
graph.addEdge(Streets.INDEPENDENCIA, Streets.CARACOLES, 59.74)
graph.addEdge(Streets.CARACOLES, Streets.MARGINAL, 497.25)
graph.addEdge(Streets.CARACOLES, Streets.ARENA, 225)
graph.addEdge(Streets.MARGINAL, Streets.LEONICIORUIZ, 204.54)
graph.addEdge(Streets.LEONICIORUIZ, Streets.AUTOPISTA, 33.47)
graph.addEdge(Streets.AUTOPISTA, Streets.PAYA, 748.69)
graph.addEdge(Streets.INDEPENDENCIA, Streets.PAYA, 600)
graph.addEdge(Streets.PAYA, Streets.ELLLANO, 314.91)
graph.addEdge(Streets.ARENA, Streets.ELLLANO, 368.59) // 368

const test = () => {
    console.log(graph.shortestPathFirst(Streets.PRIMERA, Streets.ELLLANO))
}

export default test
