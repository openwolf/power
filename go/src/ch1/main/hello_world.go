//	包，表示代码所在的模块（包）
package main
//	引入代码依赖
import(
	"fmt"
	"os"
)

//	功能实现
func main() {
	// fmt.Println(os.Args)
	// fmt.Println("Hello World")
	// os.Exit(1)
	if len(os.Args)>1{
		fmt.Println("hello world", os.Args[1])
	}else {
		fmt.Println("hello world")
	}
}