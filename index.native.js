import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'
import migrations from './model/migrations'
import Todo_Text from './model/Todo_Text'
import Todo_List from './model/Todo_List'
import Item from './model/Item'
import Todo from './model/Todo'
// import Post from './model/Post' // ⬅️ You'll import your Models here

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: Platform.OS === 'ios',
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
})

const database = new Database({
  adapter,
  modelClasses: [
    Todo,
    Todo_List,
    Todo_Text,
    Item
  ],
})

export default database