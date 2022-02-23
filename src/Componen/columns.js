export const COLUMNS = [
    {
        Header: 'id',
        accessor: 'id'
    },
    {
        Header: 'No Laporan',
        accessor: 'no_lap'
    },
    {
        Header: 'Tgl Laporan',
        accessor: 'created_date'
    },
    {
        Header: 'Jenis',
        accessor: 'type_ticket.nama'
    },
    {
        Header: 'Sub Jenis',
        accessor: 'sub_type_ticket.nama'
    },
    {
        Header: 'Petugas',
        accessor: 'petugas.nama'
    },
    {
        Header: 'Permasalahan',
        accessor: 'permasalahan'
    },
    {
        Header: 'Status',
        accessor: 'status.nama'
    },
]