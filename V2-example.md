# Frost Web Codegen Example

- Clone the repo
  - VanillaJS: Native using Webpack. [Link to repo](https://github.com/Frost-ORM/frost-web-codegen-example-native)
  <!-- - React (CRA). [Link to repo](https://github.com/Frost-ORM/frost-web-codegen-example-react) -->
- `npm install` then `npx frost generate` or the shorthand `npx frost g` . ***you might not need to run the frost generate command depending on your npm configuration and version, you can run it either way just to be safe***
- use `npm start` to launch the website

:::danger
***Please Don't forget to fill the firebaseConfig object in `src/database/frost.ts`***

***Also Don't forget to use getIndices function and add the rules to your firebaseDB***
:::

## The Data Structure

<img src="/img/data-structure.svg" />

### Schema

:::caution
The schema file in the example is not in default location. The location for the schema is specified inside package.json

```json title="$PROJECT_DIR/package.json"
{
  ...

  "frost":{
    "schema":{
      "path": "frostSchema.fsl"
    }
  }
  ...
}
```

:::

:::info
For more details on Defining the schema, go to [this page](./docs/guides/define-schema.mdx)
:::

```fsl showLineNumbers title='$PROJECT_DIR/frostSchema.fsl'
model Student {
    @@node(path:"/testing/students")
    name string
    year  SchoolYear
    birthday Date?
    email string?

    courses Course[] @Relation()
    club Club @Relation()

}

enum SchoolYear {
    FRESHMAN = "FRESHMAN"
    SOPHOMORE = "SOPHOMORE"
    JUNIOR = "JUNIOR"
    SENIOR = "SENIOR"
}

model Professor {
    @@node(path:"/testing/professors")
    
    name string
    contactInfo ContactInfo?
    department string
    email string

    courses Course[] @Relation()
    club Club @Relation()
}

type ContactInfo {
    phone   string
    email   string
}

model Course {
    @@node(path:"/testing/courses")
    
    name string
    difficultyLevel DifficultyLevel
    duration Duration // in weeks
    department string

    students Student[] @Relation()
    professor Professor @Relation()
}

enum DifficultyLevel {
    INTRODUCTORY = "INTRODUCTORY"
    INTERMEDIATE = "INTERMEDIATE"
    UPPER_INTERMEDIATE = "UPPER_INTERMEDIATE"
    ADVANCED_PLACEMENT = "ADVANCED_PLACEMENT"
}
enum Duration {
  FULL_YEAR = 24
  FULL_SEMESTER = 12
  HALF_SEMESTER = 6
}

model Club {
    @@node(path:"/testing/clubs")

    name string
    type ClubType
    roomId string

    members Student[] @Relation()
    supervisor Professor @Relation()
}

enum ClubType {
    STEM = "STEM"
    SPORTS = "SPORTS"
    CREATIVE = "CREATIVE"
}
```

### Models

#### Students

- The node path [`"/testing/students"`] is defined using the `@@node` pragma.
- The Node Model has :
  - 4 base properties
    - name
    - year
      - Type `SchoolYear` is User defined Enum. 
    - email
    - birthday
  - 2 relational properties
    - courses: denotes a relation with the `Course` Model
    - club: denotes a relation with the `Club` Model

```prisma
model Student {
    @@node(path:"/testing/students")
    name string
    year  SchoolYear
    birthday Date?
    email string?

    courses Course[] @Relation()
    club Club @Relation()

}

enum SchoolYear {
    FRESHMAN = "FRESHMAN"
    SOPHOMORE = "SOPHOMORE"
    JUNIOR = "JUNIOR"
    SENIOR = "SENIOR"
}


```

#### Professors

- The node path [`"/testing/professors"`] is defined using the `@@node` pragma.
- The Node Model has :
  - 4 base properties
    - name
    - contactInfo
      - Type `ContactInfo` is User defined Type. 
    - department
    - email
  - 2 relational properties
    - courses: denotes a relation with the `Course` Model
    - club: denotes a relation with the `Club` Model

```prisma
model Professor {
    @@node(path:"/testing/professors")
    
    name string
    contactInfo ContactInfo?
    department string
    email string

    courses Course[] @Relation()
    club Club @Relation()
}

type ContactInfo {
    phone   string
    email   string
}
```

#### Courses

- The node path [`"/testing/courses"`] is defined using the `@@node` pragma.
- The Node Model has :
  - 4 base properties
    - name
    - department
    - duration:
      - Type `Duration` is User defined Enum.
    - difficultyLevel:
      - Type `DifficultyLevel` is User defined Enum.
  - 2 relational properties
    - students: denotes a relation with the `Student` Model
    - professor: denotes a relation with the `Professor` Model
  
```prisma
model Course {
    @@node(path:"/testing/courses")
    
    name string
    difficultyLevel DifficultyLevel
    duration Duration 
    department string

    students Student[] @Relation()
    professor Professor @Relation()
}

enum DifficultyLevel {
    INTRODUCTORY = "INTRODUCTORY"
    INTERMEDIATE = "INTERMEDIATE"
    UPPER_INTERMEDIATE = "UPPER_INTERMEDIATE"
    ADVANCED_PLACEMENT = "ADVANCED_PLACEMENT"
}
enum Duration { // in weeks
  FULL_YEAR = 24
  FULL_SEMESTER = 12
  HALF_SEMESTER = 6
}
```

#### Clubs

- The node path [`"/testing/clubs"`] is defined using the `@@node` pragma.
- The Node Model has :
  - 4 base properties
    - name
    - roomId
    - type:
      - Type `ClubType` is User defined Enum.
  - 2 relational properties
    - members: denotes a relation with the `Student` Model
    - supervisor: denotes a relation with the `Professor` Model
  
```prisma
model Club {
    @@node(path:"/testing/clubs")

    name string
    type ClubType
    roomId string

    members Student[] @Relation()
    supervisor Professor @Relation()
}

enum ClubType {
    STEM = "STEM"
    SPORTS = "SPORTS"
    CREATIVE = "CREATIVE"
}
```
  
### Relations

#### One to One

##### Club Supervisor (Professor <--> Club)

- Each Club has one supervisor and each professor supervises only one club.
- Relation Type: `RelationTypes.ONE_TO_ONE`.
  - `Professor` Model:
    - `club` property is single instance (ie; not array) and has `@Relation` modifier
  - `Club` Model:
    - `supervisor` property is single instance (ie; not array) and has `@Relation` modifier
  - You can determine that the relation is one-to-one by looking at the relational properties on each side. In this case the properties [`club`,`supervisor`] are both not arrays so it's a `One to One` Relation.
  
```prisma

model Professor {
    ...
    club Club @Relation()
    ...
}


model Club {
    ...
    supervisor Professor @Relation()
    ...
}

```

#### One to Many

##### Club Members (Club <--> Student)

- Each Club has multiple students (members) and each student is allowed to participate in one club only
- Relation Type: `RelationTypes.ONE_TO_MANY`
  - `Club` Model:
    - `members` property is an array type and has `@Relation` modifier
  - `Student` Model:
    - `club` property is single instance (ie; not array) and has `@Relation` modifier
  - You can determine that the relation is One-to-Many by looking at the relational properties on each side. In this case, the `members` property on **Club** Model is any array, and the `club` property on the **Student** model is not an array. So it's a `One to Many` Relation.

```prisma

model Student {
    ...
    club Club @Relation()
    ...
}

model Club {
    ...
    members Student[] @Relation()
    ...
}

```

##### Professors' Courses  (Professor <--> Course)

- Each Course is taught by one professor but one professor teaches multiple courses.
- Relation Type: `RelationTypes.ONE_TO_MANY`
  - `Professor` Model:
    - `courses` property is an array type and has `@Relation` modifier
  - `Course` Model:
    - `professor` property is single instance (ie; not array) and has `@Relation` modifier
  - You can determine that the relation is One-to-Many by looking at the relational properties on each side. In this case, the `courses` property on **Professor** Model is any array, and the `professor` property on the **Course** model is not an array. So it's a `One to Many` Relation.

```prisma
model Course {
    ...
    professor Professor @Relation()
    ...
}

model Professor {
    ...
    courses Course[] @Relation()
    ...
}


```

#### Many to Many

##### Students' Courses (Student <--> Course)

- Each Course is audited by multiple students and each student audits multiple courses
- Relation Type: `RelationTypes.MANY_TO_MANY`:
  - `Student` Model:
    - `courses` property is an array type and has `@Relation` modifier
  - `Course` Model :
    - `students` property is an array type and has `@Relation` modifier
  - You can determine that the relation is Many-to-Many by looking at the relational properties on each side. In this case the properties [`students`,`courses`] are both arrays so it's a `Many to Many` Relation.

```prisma
model Student {
    ...
    courses Course[] @Relation()
    ...

}

model Course {
    ...
    students Student[] @Relation()
    ...
}

```

## Brief Explanation on flow

### Initialization

- The firebase configuration object is passed as the first argument to the [Frost.initialize](./api/classes/Frost#initialize) function.
- The Function Returns a FrostApp Instance containing the Delegates instances for each model, the `firebaseApp` instance, and the `firebaseDB` instance (SDK 9).
- The [`firebaseDB` instance](https://firebase.google.com/docs/reference/js/database.database.md#database_class) will be used in the [update()](https://firebase.google.com/docs/reference/js/database#update) function in [Mock Data](#mock-data)

```typescript title=src/database/frost.ts
export const FrostApp = Frost.initialize(firebaseConfig)
```

### Rendering

- We have 3 lists:
  - Courses List
  - Clubs List
  - Students List
- Each list will contain cards displaying the data for each item.
- The students list is empty by default. Each card in the Clubs and Courses List will have `Students List` Button. When this button is clicked; then the students for said course or club will be displayed in the list.

- The Rendering is managed by native DOM Manipulation and Custom Web Elements (Cards and Buttons from Ionic UI).
- We Have an observer for each list
  - Clubs and Courses: Their observers are from the [observeMany()](./api/classes/FrostDelegate#observemany) function in their respective FrostDelegate.
  - Students: Their Observer is manually created form a RX Subject. and the Emitting of the data to this observer is managed through the other observers and the `onclick` events.

```typescript title=src/index.ts

...
/*
 * When Clicked set the data in the selected variable
 * and Emit the new students list
 */
function handleStudentsListClick(data: ClubTypes["FullModel"] | CourseTypes["FullModel"]){
    selected = { type: ClubPredicate(data) ? "club":"course", id: data.id };
    studentsSubject.next(Object.values(( ClubPredicate(data)? data.members : data.students )?? []) as any);
}

/*
 * Courses Observer 
 * (No Constraints Passed , So it listens to all Courses) 
 * included with each course is the connected students and professor
 */
FrostApp.course.observeMany({
  include: {"professor":true, "students":true},
}).subscribe((data) => {
  console.log({data})
  /*
   * When the data changes the coursesList div is modified
   */
  coursesList.replaceChildren(...Object.values(data).map((course)=>courseCard(course,handleStudentsListClick)));


  /*
   * if the selected course changes then emit the new students list
   * if empty then emit an empty student list
   */
  if (selected && selected.type === "course" ) {
      if(!Object.values(data).length) studentsSubject.next([])
      else studentsSubject.next(Object.values(data[selected?.id]?.students ?? [] as any));
  }

});

/*
* Clubs Observer 
* (No Constraints Passed , So it listens to all Clubs) 
* included with each club is the connected students and supervisor
*/
FrostApp.club.observeMany({ include: {"supervisor":true, "members":true } }).subscribe(
  (data) => {
      /*
       * When the data changes the clubsList div is modified
       */
      clubsList.replaceChildren(...Object.values(data).map((club)=>clubCard(club,handleStudentsListClick)));
  

      /*
       * if the selected club changes then emit the new students list
       * if empty then emit an empty student list
       */
      if (selected && selected.type === "club" ) {
          if(!Object.values(data).length) studentsSubject.next([])
          else studentsSubject.next(Object.values(data[selected?.id]?.members ?? [] as any));
      }

  },
);

studentsSubject.subscribe((data) => {
  /*
   * When the data changes the studentsList div is modified
   */
  studentsList.replaceChildren(...data.map(studentCard));
});


...

```

## Mock Data

- Some Initial data is generated and Added to the database. (`src/database/mock-data.ts` contains the frost operations to add the data)
- Extra Students can be added. (mock data generated using Faker.Js)

```typescript title=src/index.ts

/*
 * Sets The initial Mock Data (Clubs,Courses,Professors, Some Students)
 */
mockBtn.onclick = () => {
    setData();
};
/*
 * Adds Extra Mock Students Data
 */
mockStudentsBtn.onclick = () => {
    addStudents();
};

```
