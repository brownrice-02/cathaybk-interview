# Answer 4

## 介面（Interface）

在 TypeScript 中，介面（Interface）可用於描述物件的型別（Type），包括屬性（Property）和方法（Method），提供了一種抽象的方式，使使用者能夠定義複雜的型別而不需要實際的實現。

### 使用場景

1. 定義物件的型別（Type）：

    以下例子中物件擁有 name 和 age 兩個屬性，以及 sayHello 的方法。
    ```typescript
    // 定義一個介面 Person
    interface Person {
      name: string;
      age: number;
      sayHello: () => void;
    }

    // 定義一個變數 person，型別是 Person
    const person: Person = {
      name: 'John',
      age: 30,
      sayHello: () => {
        console.log('Hello!');
      },
    };
    ```
2. 定義類別（Class）：

    介面也可以被用於規定類別（Class）的結構。

	```typescript
    // 定義一個介面 Shape，其中有一個名為 getArea 的方法
	interface Shape {
	  getArea(): number;
	}
	
    // 定義 Circle 這個 Class 實現介面 Shape
	class Circle implements Shape {
	  constructor(private radius: number) {}
	
      // 實現介面中的 getArea 方法
	  getArea() {
	    return Math.PI * this.radius ** 2;
	  }
	}
	```
## 列舉型別（Enum）
列舉型別（Enum）是一種用於定義命名常數的方式，這種結構可以將一組相關的常數歸納在一起，使程式碼更易於理解、可讀性更高，同時提供了更強大的靜態型別檢查。

### 使用場景
1. 表示有限集合的值：

    列舉型別可以被用來定義一組有限的相關值。
    像是以下範例中用 Enum 定義了四個方向，這樣的定義使 userDirection 只能是這四個值之一，從而提高了程式的可讀性、可維護性。
    ```typescript
    enum Direction {
      Up = 'UP',
      Down = 'DOWN',
      Left = 'LEFT',
      Right = 'RIGHT',
    }

    const userDirection: Direction = Direction.Up;
    ```
2. 與數字搭配使用：

    列舉型別還可以與數字搭配使用。
    像以下範例定義了星期幾與相對應的數字，使程式碼更有組織性，同時也提供了靜態型別檢查，避免使用不正確的值。

    ```typescript
    enum Weekday {
      Sunday = 0,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
    }

    const today: Weekday = Weekday.Wednesday;
    ```
## 什麼時候使用 Interface 什麼時候使用 Enum？
當需要描述物件的形狀、結構，並且希望多個物件可以共享相同的型別時可以使用 Interface；而當有一組相關的常數需要歸類在一起時可以使用 Enum，就如前述的那些範例。