#[tauri::command]
fn read_file(path: String) -> Result<tauri::ipc::Response, String> {
  let bytes = std::fs::read(&path).map_err(|e| e.to_string())?;
  Ok(tauri::ipc::Response::new(bytes))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![read_file])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
