export default function DashboardWireframe() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center space-x-3">
              <div className="h-4 w-4 bg-gray-300 rounded"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="h-8 w-64 bg-gray-200 rounded"></div>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="h-4 w-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="h-40 w-40 border-8 border-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-48 bg-gray-100 rounded-lg flex flex-col justify-end p-4">
                {[40, 60, 30, 80, 50].map((height, index) => (
                  <div key={index} className="flex items-end space-x-4">
                    <div className={`h-${height} w-12 bg-gray-300 rounded-t`}></div>
                    <div className={`h-${height - 10} w-12 bg-gray-300 rounded-t`}></div>
                    <div className={`h-${height + 10} w-12 bg-gray-300 rounded-t`}></div>
                    <div className={`h-${height - 20} w-12 bg-gray-300 rounded-t`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-4 gap-4 mb-4 pb-2 border-b border-gray-100">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-4 w-full bg-gray-200 rounded"></div>
                ))}
              </div>
              {[1, 2, 3, 4, 5].map((row) => (
                <div key={row} className="grid grid-cols-4 gap-4 py-2 border-b border-gray-100">
                  {[1, 2, 3, 4].map((col) => (
                    <div key={col} className="h-4 w-full bg-gray-100 rounded"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
