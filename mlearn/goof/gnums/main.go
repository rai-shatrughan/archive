package main

import (
	"fmt"
	"gonum.org/v1/gonum/mat"
	"gonum.org/v1/gonum/stat"
)

func main() {
	v := mat.NewVecDense(3, []float64{4, 5, 6})
	println("v: ")
	matPrint(v)

	mean()
	mode()

}

func matPrint(X mat.Matrix) {
	fa := mat.Formatted(X, mat.Prefix(""), mat.Squeeze())
	fmt.Printf("%v\n", fa)
}

func mean() {
	values := []float64{1, 2, 3, 4, 5, 6}
	weights := []float64{1, 1, 1, 1, 1, 1} //has the same effects as nil
	fmt.Println(stat.Mean(values, weights))
}

func mode() {
	values := []float64{10, 20, 25, 30, 45, 70, 30}
	fmt.Println(stat.Mode(values, nil))
}
