# People console

A console application utilizing public OData API from: https://www.odata.org/odata-services/ (use v4). The app can
- List people
- Allow searching/filtering people
- Show details on a specific Person

## Installation

Install globally by running:

```bash
$ npm install -g .
```

## List people

```bash
$ people -l

┌─────────┬────────────────────┬─────────────┬─────────────┬───────────────────────────────────────────────┐
│ (index) │      userName      │  firstName  │  lastName   │                    emails                     │
├─────────┼────────────────────┼─────────────┼─────────────┼───────────────────────────────────────────────┤
│    0    │   'russellwhyte'   │  'Russell'  │   'Whyte'   │   'Russell@example.com Russell@contoso.com'   │
│    1    │   'scottketchum'   │   'Scott'   │  'Ketchum'  │              'Scott@example.com'              │
│    2    │   'ronaldmundy'    │  'Ronald'   │   'Mundy'   │    'Ronald@example.com Ronald@contoso.com'    │

```

## Filter 
The query is based on [OData V4](https://www.odata.org/odata-services/#odata-v4)
```bash
$ people -f "FirstName eq 'Scott'"

┌─────────┬────────────────┬───────────┬───────────┬─────────────────────┐
│ (index) │    userName    │ firstName │ lastName  │       emails        │
├─────────┼────────────────┼───────────┼───────────┼─────────────────────┤
│    0    │ 'scottketchum' │  'Scott'  │ 'Ketchum' │ 'Scott@example.com' │
└─────────┴────────────────┴───────────┴───────────┴─────────────────────┘
```
## Show details
Show details of a specific person

```bash
$ people -d russellwhyte

- fetching details for russellwhyte, please wait...
┌───────────┬───────────────────────────────────────────┐
│  (index)  │                  Values                   │
├───────────┼───────────────────────────────────────────┤
│ userName  │              'russellwhyte'               │
│ firstName │                 'Russell'                 │
│ lastName  │                  'Whyte'                  │
│  emails   │ 'Russell@example.com Russell@contoso.com' │
└───────────┴───────────────────────────────────────────┘
```

## Help
```bash
$ people --help

Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -d, --details  Show details on a specific Person                      [string]
  -l, --list     List people                                           [boolean]
  -f, --filter   Filter people                                          [string]
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
